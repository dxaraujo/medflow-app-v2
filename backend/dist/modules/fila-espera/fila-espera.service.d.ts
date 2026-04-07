import { Model } from 'mongoose';
import { FilaEsperaDocument } from './schemas/fila-espera.schema';
import { CreateFilaEsperaDto } from './dto/create-fila-espera.dto';
import { UpdateFilaEsperaDto } from './dto/update-fila-espera.dto';
import { PaginatedResult } from '../../common/dto/pagination.dto';
export declare class FilaEsperaService {
    private readonly filaModel;
    constructor(filaModel: Model<FilaEsperaDocument>);
    create(dto: CreateFilaEsperaDto): Promise<FilaEsperaDocument>;
    findAll(filters?: {
        profissional_id?: string;
        local_id?: string;
        status?: string;
    }): Promise<PaginatedResult<FilaEsperaDocument>>;
    findById(id: string): Promise<FilaEsperaDocument>;
    update(id: string, dto: UpdateFilaEsperaDto): Promise<FilaEsperaDocument>;
}
