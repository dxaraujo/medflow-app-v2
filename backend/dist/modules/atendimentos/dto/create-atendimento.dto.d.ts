import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class SinaisVitaisDto {
    pressao_arterial_sistolica?: number;
    pressao_arterial_diastolica?: number;
    frequencia_cardiaca?: number;
    frequencia_respiratoria?: number;
    temperatura?: number;
    saturacao_o2?: number;
    peso?: number;
    altura?: number;
    imc?: number;
    glicemia_capilar?: number;
    observacoes_vitais?: string;
}
export declare class SegmentoExameFisicoDto {
    normal: boolean;
    descricao?: string;
}
export declare class SegmentarExameFisicoDto {
    cabeca_pescoco?: SegmentoExameFisicoDto;
    torax_pulmoes?: SegmentoExameFisicoDto;
    cardiovascular?: SegmentoExameFisicoDto;
    abdomen?: SegmentoExameFisicoDto;
    extremidades?: SegmentoExameFisicoDto;
    neurologico?: SegmentoExameFisicoDto;
    pele?: SegmentoExameFisicoDto;
}
export declare class ExameFisicoDto {
    estado_geral?: string;
    segmentar?: SegmentarExameFisicoDto;
    exame_fisico_complementar?: string;
}
export declare class HipoteseDiagnosticaDto {
    descricao: string;
    cid_codigo?: string;
    cid_descricao?: string;
    tipo: string;
    status: string;
}
export declare class CondutaDto {
    plano_terapeutico?: string;
    orientacoes_paciente?: string;
}
export declare class ProcedimentoAtendimentoDto {
    descricao_procedimento: string;
    codigo_procedimento?: string;
    data: CreateDataInfoDto;
    observacoes?: string;
}
export declare class ItemPrescricaoDto {
    nome_medicamento: string;
    principio_ativo?: string;
    dosagem?: string;
    via_administracao: string;
    frequencia?: string;
    duracao?: string;
    quantidade?: string;
    observacoes?: string;
}
export declare class PrescricoesAtendimentoDto {
    tipo_receita: string;
    numero_receita?: string;
    itens: ItemPrescricaoDto[];
}
export declare class PedidoExameDto {
    tipo_exame: string;
    descricao_exame: string;
    codigo_exame?: string;
    justificativa_clinica?: string;
    urgencia: string;
    status: string;
    data_solicitacao: CreateDataInfoDto;
    data_resultado?: CreateDataInfoDto;
    resultado_resumo?: string;
    arquivo_resultado_ref?: string;
}
export declare class AtestadoAtendimentoDto {
    tipo: string;
    descricao?: string;
    cid_codigo?: string;
    dias_afastamento?: number;
    data_emissao: CreateDataInfoDto;
}
export declare class DocumentoAnexadoDto {
    tipo_documento: string;
    descricao?: string;
    nome_arquivo: string;
    caminho_armazenamento: string;
    mime_type?: string;
    tamanho_bytes?: number;
    data_upload: CreateDataInfoDto;
    profissional_upload_id: string;
}
export declare class CreateAtendimentoDto {
    paciente_id: string;
    profissional_id: string;
    local_atendimento_id: string;
    agendamento_id?: string;
    data_atendimento: CreateDataInfoDto;
    tipo_atendimento: string;
    status: string;
    nome_paciente: string;
    nome_profissional: string;
    sinais_vitais?: SinaisVitaisDto;
    exame_fisico?: ExameFisicoDto;
    hipoteses_diagnosticas?: HipoteseDiagnosticaDto[];
    conduta?: CondutaDto;
    procedimentos?: ProcedimentoAtendimentoDto[];
    prescricoes?: PrescricoesAtendimentoDto;
    pedidos_exames?: PedidoExameDto[];
    atestados?: AtestadoAtendimentoDto[];
    documentos_anexados?: DocumentoAnexadoDto[];
}
