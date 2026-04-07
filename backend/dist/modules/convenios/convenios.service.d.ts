import { Model } from 'mongoose';
import { ConvenioDocument } from './schemas/convenio.schema';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class ConveniosService {
    private readonly convenioModel;
    constructor(convenioModel: Model<ConvenioDocument>);
    create(dto: CreateConvenioDto): Promise<ConvenioDocument>;
    findAll(pagination: PaginationDto, filters?: {
        search?: string;
        ativo?: boolean;
    }): Promise<PaginatedResult<ConvenioDocument>>;
    findById(id: string): Promise<ConvenioDocument>;
    update(id: string, dto: UpdateConvenioDto): Promise<ConvenioDocument>;
    remove(id: string): Promise<ConvenioDocument>;
}
