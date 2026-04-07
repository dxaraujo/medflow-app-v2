import { Model } from 'mongoose';
import { PacienteDocument } from './schemas/paciente.schema';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class PacientesService {
    private readonly pacienteModel;
    constructor(pacienteModel: Model<PacienteDocument>);
    create(dto: CreatePacienteDto): Promise<PacienteDocument>;
    findAll(pagination: PaginationDto, filters?: {
        search?: string;
        ativo?: boolean;
    }): Promise<PaginatedResult<PacienteDocument>>;
    findById(id: string): Promise<PacienteDocument>;
    update(id: string, dto: UpdatePacienteDto): Promise<PacienteDocument>;
    remove(id: string): Promise<PacienteDocument>;
}
