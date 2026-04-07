import { Model } from 'mongoose';
import { AtendimentoDocument } from './schemas/atendimento.schema';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class AtendimentosService {
    private readonly atendimentoModel;
    constructor(atendimentoModel: Model<AtendimentoDocument>);
    private mapProcedimentos;
    private mapPedidosExames;
    private mapAtestados;
    private mapDocumentosAnexados;
    private mapExameFisico;
    private buildCreatePayload;
    create(dto: CreateAtendimentoDto): Promise<AtendimentoDocument>;
    findAll(pagination: PaginationDto, filters?: {
        paciente_id?: string;
        profissional_id?: string;
        status?: string;
        data_inicio?: string;
        data_fim?: string;
    }): Promise<PaginatedResult<AtendimentoDocument>>;
    findById(id: string): Promise<AtendimentoDocument>;
    private applyUpdateTransforms;
    update(id: string, dto: UpdateAtendimentoDto): Promise<AtendimentoDocument>;
    remove(id: string): Promise<AtendimentoDocument>;
}
