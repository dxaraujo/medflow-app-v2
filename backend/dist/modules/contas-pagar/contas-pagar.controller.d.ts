import { ContasPagarService } from './contas-pagar.service';
import { CreateContaPagarDto } from './dto/create-conta-pagar.dto';
import { UpdateContaPagarDto } from './dto/update-conta-pagar.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ContasPagarController {
    private readonly contasPagarService;
    constructor(contasPagarService: ContasPagarService);
    create(dto: CreateContaPagarDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/conta-pagar.schema").ContaPagar, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/conta-pagar.schema").ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, status?: string, categoria_despesa?: string, data_inicio?: string, data_fim?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/conta-pagar.schema").ContaPagar, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/conta-pagar.schema").ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/conta-pagar.schema").ContaPagar, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/conta-pagar.schema").ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateContaPagarDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/conta-pagar.schema").ContaPagar, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/conta-pagar.schema").ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/conta-pagar.schema").ContaPagar, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/conta-pagar.schema").ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
