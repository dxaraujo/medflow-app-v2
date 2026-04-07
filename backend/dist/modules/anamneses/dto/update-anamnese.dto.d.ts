import { CreateAnamneseDto } from './create-anamnese.dto';
declare const UpdateAnamneseDto_base: import("@nestjs/common").Type<Partial<Omit<CreateAnamneseDto, "paciente_id">>>;
export declare class UpdateAnamneseDto extends UpdateAnamneseDto_base {
    profissional_id?: string;
    motivo?: string;
}
export {};
