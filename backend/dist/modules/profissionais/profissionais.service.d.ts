import { Model } from 'mongoose';
import { ProfissionalDocument } from './schemas/profissional.schema';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class ProfissionaisService {
    private readonly profissionalModel;
    constructor(profissionalModel: Model<ProfissionalDocument>);
    create(dto: CreateProfissionalDto): Promise<ProfissionalDocument>;
    findAll(pagination: PaginationDto, filters?: {
        perfil?: string;
        ativo?: boolean;
        search?: string;
    }): Promise<PaginatedResult<ProfissionalDocument>>;
    findById(id: string): Promise<ProfissionalDocument>;
    update(id: string, dto: UpdateProfissionalDto): Promise<ProfissionalDocument>;
    remove(id: string): Promise<ProfissionalDocument>;
}
