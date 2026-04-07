import { AnamnesesService } from './anamneses.service';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { UpdateAnamneseDto } from './dto/update-anamnese.dto';
export declare class AnamnesesController {
    private readonly anamnesesService;
    constructor(anamnesesService: AnamnesesService);
    create(dto: CreateAnamneseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/anamnese.schema").Anamnese, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/anamnese.schema").Anamnese & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findByPaciente(pacienteId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/anamnese.schema").Anamnese, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/anamnese.schema").Anamnese & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateAnamneseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/anamnese.schema").Anamnese, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/anamnese.schema").Anamnese & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
