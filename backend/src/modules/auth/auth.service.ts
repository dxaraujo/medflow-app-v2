import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    const { password, ...result } = user.toObject();
    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Usuário desativado');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    await this.usersService.updateLastLogin(user._id.toString());

    const tokens = await this.generateTokens(
      user._id.toString(),
      user.email,
      user.role,
    );

    return {
      ...tokens,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('jwt.refreshSecret') ?? 'default-refresh-secret',
      });

      const user = await this.usersService.findById(payload.sub);
      if (!user || !user.isActive) {
        throw new UnauthorizedException('Usuário inativo ou não encontrado');
      }

      return this.generateTokens(
        user._id.toString(),
        user.email,
        user.role,
      );
    } catch {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }
  }

  async getProfile(userId: string) {
    return this.usersService.findById(userId);
  }

  private async generateTokens(
    userId: string,
    email: string,
    role: string,
  ) {
    const payload = { sub: userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('jwt.secret') ?? 'default-secret',
        expiresIn: (this.configService.get<string>('jwt.expiration') ?? '1h') as any,
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('jwt.refreshSecret') ?? 'default-refresh-secret',
        expiresIn: (this.configService.get<string>('jwt.refreshExpiration') ?? '7d') as any,
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
