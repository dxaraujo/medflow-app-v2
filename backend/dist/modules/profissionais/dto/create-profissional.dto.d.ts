import { CreateContatoDto } from '../../../common/dto/contato.dto';
export declare class RegistroProfissionalDto {
    crm: string;
    uf_crm: string;
    especialidades?: string[];
}
export declare class CreateProfissionalDto {
    nome_completo: string;
    cpf: string;
    perfil: string;
    registro_profissional?: RegistroProfissionalDto;
    contato: CreateContatoDto;
    locais_vinculados?: string[];
    ativo?: boolean;
}
