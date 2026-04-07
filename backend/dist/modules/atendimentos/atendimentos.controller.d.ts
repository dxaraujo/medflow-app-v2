import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class AtendimentosController {
    private readonly atendimentosService;
    constructor(atendimentosService: AtendimentosService);
    create(dto: CreateAtendimentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/atendimento.schema").Atendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/atendimento.schema").Atendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, paciente_id?: string, profissional_id?: string, status?: string, data_inicio?: string, data_fim?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/atendimento.schema").Atendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/atendimento.schema").Atendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/atendimento.schema").Atendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/atendimento.schema").Atendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateAtendimentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/atendimento.schema").Atendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/atendimento.schema").Atendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/atendimento.schema").Atendimento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/atendimento.schema").Atendimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
