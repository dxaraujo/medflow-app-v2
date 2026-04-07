import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(dto: CreatePacienteDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/paciente.schema").Paciente, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/paciente.schema").Paciente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, search?: string, ativo?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/paciente.schema").Paciente, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/paciente.schema").Paciente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/paciente.schema").Paciente, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/paciente.schema").Paciente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdatePacienteDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/paciente.schema").Paciente, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/paciente.schema").Paciente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/paciente.schema").Paciente, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/paciente.schema").Paciente & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
