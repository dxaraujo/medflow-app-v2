import { Model } from 'mongoose';
import { LocalAtendimentoDocument } from './schemas/local-atendimento.schema';
import { CreateLocalAtendimentoDto } from './dto/create-local-atendimento.dto';
import { UpdateLocalAtendimentoDto } from './dto/update-local-atendimento.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class LocaisAtendimentoService {
    private readonly localAtendimentoModel;
    constructor(localAtendimentoModel: Model<LocalAtendimentoDocument>);
    private mapConfiguracoes;
    create(dto: CreateLocalAtendimentoDto): Promise<LocalAtendimentoDocument>;
    findAll(pagination: PaginationDto, filters?: {
        search?: string;
        ativo?: boolean;
    }): Promise<PaginatedResult<LocalAtendimentoDocument>>;
    findById(id: string): Promise<LocalAtendimentoDocument>;
    update(id: string, dto: UpdateLocalAtendimentoDto): Promise<LocalAtendimentoDocument>;
    remove(id: string): Promise<LocalAtendimentoDocument>;
}
