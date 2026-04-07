import { Model } from 'mongoose';
import { AnamneseDocument } from './schemas/anamnese.schema';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { UpdateAnamneseDto } from './dto/update-anamnese.dto';
export declare class AnamnesesService {
    private readonly anamneseModel;
    constructor(anamneseModel: Model<AnamneseDocument>);
    create(dto: CreateAnamneseDto): Promise<AnamneseDocument>;
    findByPacienteId(pacienteId: string): Promise<AnamneseDocument>;
    update(id: string, dto: UpdateAnamneseDto): Promise<AnamneseDocument>;
}
