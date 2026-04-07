import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class AgendamentosController {
    private readonly agendamentosService;
    constructor(agendamentosService: AgendamentosService);
    create(dto: CreateAgendamentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/agendamento.schema").Agendamento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/agendamento.schema").Agendamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, profissional_id?: string, local_id?: string, paciente_id?: string, tipo?: string, status?: string, data_inicio?: string, data_fim?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/agendamento.schema").Agendamento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/agendamento.schema").Agendamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/agendamento.schema").Agendamento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/agendamento.schema").Agendamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateAgendamentoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/agendamento.schema").Agendamento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/agendamento.schema").Agendamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/agendamento.schema").Agendamento, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/agendamento.schema").Agendamento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
