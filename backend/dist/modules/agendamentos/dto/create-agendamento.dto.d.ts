import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class RecorrenciaBloqueioDto {
    dias_semana?: number[];
    hora_inicio?: string;
    hora_fim?: string;
}
export declare class BloqueioAgendamentoDto {
    motivo?: string;
    categoria: string;
    recorrente: boolean;
    recorrencia?: RecorrenciaBloqueioDto;
}
export declare class TelemedicinaAgendamentoDto {
    link_sala_virtual: string;
    plataforma?: string;
}
export declare class CreateAgendamentoDto {
    profissional_id: string;
    local_id: string;
    tipo: string;
    paciente_id?: string;
    data_horario_inicio: CreateDataInfoDto;
    data_horario_fim?: CreateDataInfoDto;
    duracao_minutos: number;
    duracao_personalizada?: boolean;
    duracao_padrao_tipo_minutos: number;
    bloqueio?: BloqueioAgendamentoDto;
    telemedicina?: TelemedicinaAgendamentoDto;
    status: string;
    is_encaixe?: boolean;
    observacoes?: string;
    nome_paciente?: string;
    nome_profissional: string;
    telefone_paciente?: string;
    convenio_nome?: string;
}
