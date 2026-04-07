import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class TriagemDto {
    queixa_rapida?: string;
    pressao_arterial_sistolica?: number;
    pressao_arterial_diastolica?: number;
    temperatura?: number;
    peso?: number;
    altura?: number;
}
export declare class CreateFilaEsperaDto {
    paciente_id: string;
    agendamento_id?: string;
    profissional_id: string;
    local_atendimento_id: string;
    horario_checkin: CreateDataInfoDto;
    prioridade: string;
    status: string;
    posicao_fila: number;
    triagem?: TriagemDto;
    nome_paciente: string;
    nome_profissional: string;
}
