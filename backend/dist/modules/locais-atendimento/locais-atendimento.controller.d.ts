import { LocaisAtendimentoService } from './locais-atendimento.service';
import { CreateLocalAtendimentoDto } from './dto/create-local-atendimento.dto';
import { UpdateLocalAtendimentoDto } from './dto/update-local-atendimento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class LocaisAtendimentoController {
    private readonly locaisAtendimentoService;
    constructor(locaisAtendimentoService: LocaisAtendimentoService);
    create(dto: CreateLocalAtendimentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/local-atendimento.schema").LocalAtendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/local-atendimento.schema").LocalAtendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, search?: string, ativo?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/local-atendimento.schema").LocalAtendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/local-atendimento.schema").LocalAtendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/local-atendimento.schema").LocalAtendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/local-atendimento.schema").LocalAtendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateLocalAtendimentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/local-atendimento.schema").LocalAtendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/local-atendimento.schema").LocalAtendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/local-atendimento.schema").LocalAtendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/local-atendimento.schema").LocalAtendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
