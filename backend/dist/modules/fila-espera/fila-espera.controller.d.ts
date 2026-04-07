import { FilaEsperaService } from './fila-espera.service';
import { CreateFilaEsperaDto } from './dto/create-fila-espera.dto';
import { UpdateFilaEsperaDto } from './dto/update-fila-espera.dto';
export declare class FilaEsperaController {
    private readonly filaEsperaService;
    constructor(filaEsperaService: FilaEsperaService);
    create(dto: CreateFilaEsperaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/fila-espera.schema").FilaEspera, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/fila-espera.schema").FilaEspera & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(profissional_id?: string, local_atendimento_id?: string, status?: string): Promise<import("../../common/dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/fila-espera.schema").FilaEspera, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/fila-espera.schema").FilaEspera & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    update(id: string, dto: UpdateFilaEsperaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/fila-espera.schema").FilaEspera, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/fila-espera.schema").FilaEspera & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
