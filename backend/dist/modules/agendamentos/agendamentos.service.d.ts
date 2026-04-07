import { Model } from 'mongoose';
import { AgendamentoDocument } from './schemas/agendamento.schema';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class AgendamentosService {
    private readonly agendamentoModel;
    constructor(agendamentoModel: Model<AgendamentoDocument>);
    create(dto: CreateAgendamentoDto): Promise<AgendamentoDocument>;
    findAll(pagination: PaginationDto, filters?: {
        profissional_id?: string;
        local_id?: string;
        paciente_id?: string;
        tipo?: string;
        status?: string;
        data_inicio?: string;
        data_fim?: string;
    }): Promise<PaginatedResult<AgendamentoDocument>>;
    findById(id: string): Promise<AgendamentoDocument>;
    update(id: string, dto: UpdateAgendamentoDto): Promise<AgendamentoDocument>;
    cancel(id: string): Promise<AgendamentoDocument>;
}
