import { ConveniosService } from './convenios.service';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ConveniosController {
    private readonly conveniosService;
    constructor(conveniosService: ConveniosService);
    create(dto: CreateConvenioDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/convenio.schema").Convenio, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/convenio.schema").Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, search?: string, ativo?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/convenio.schema").Convenio, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/convenio.schema").Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/convenio.schema").Convenio, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/convenio.schema").Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateConvenioDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/convenio.schema").Convenio, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/convenio.schema").Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/convenio.schema").Convenio, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/convenio.schema").Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
