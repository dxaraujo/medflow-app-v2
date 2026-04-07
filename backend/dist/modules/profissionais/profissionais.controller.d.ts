import { ProfissionaisService } from './profissionais.service';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProfissionaisController {
    private readonly profissionaisService;
    constructor(profissionaisService: ProfissionaisService);
    create(dto: CreateProfissionalDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/profissional.schema").Profissional, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profissional.schema").Profissional & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, perfil?: string, ativo?: string, search?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/profissional.schema").Profissional, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profissional.schema").Profissional & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/profissional.schema").Profissional, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profissional.schema").Profissional & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateProfissionalDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/profissional.schema").Profissional, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profissional.schema").Profissional & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/profissional.schema").Profissional, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profissional.schema").Profissional & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
