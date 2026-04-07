import { Model } from 'mongoose';
import { ContaPagarDocument } from './schemas/conta-pagar.schema';
import { CreateContaPagarDto } from './dto/create-conta-pagar.dto';
import { UpdateContaPagarDto } from './dto/update-conta-pagar.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class ContasPagarService {
    private readonly contaModel;
    constructor(contaModel: Model<ContaPagarDocument>);
    create(dto: CreateContaPagarDto): Promise<ContaPagarDocument>;
    findAll(pagination: PaginationDto, filters?: {
        status?: string;
        categoria_despesa?: string;
        data_inicio?: string;
        data_fim?: string;
    }): Promise<PaginatedResult<ContaPagarDocument>>;
    findById(id: string): Promise<ContaPagarDocument>;
    update(id: string, dto: UpdateContaPagarDto): Promise<ContaPagarDocument>;
    cancel(id: string): Promise<ContaPagarDocument>;
}
