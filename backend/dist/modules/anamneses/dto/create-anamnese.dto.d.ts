import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class AlergiaAnamneseDto {
    tipo: string;
    substancia: string;
    gravidade: string;
    reacao?: string;
}
export declare class TabagismoAnamneseDto {
    status: string;
    quantidade_por_dia?: number;
    tempo_anos?: number;
}
export declare class EtilismoAnamneseDto {
    status: string;
    frequencia?: string;
    tipo?: string;
}
export declare class AtividadeFisicaAnamneseDto {
    pratica: boolean;
    tipo?: string;
    frequencia_semanal?: string;
}
export declare class SonoAnamneseDto {
    qualidade: string;
    horas_por_noite?: number;
}
export declare class HabitosVidaAnamneseDto {
    tabagismo: TabagismoAnamneseDto;
    etilismo: EtilismoAnamneseDto;
    atividade_fisica: AtividadeFisicaAnamneseDto;
    alimentacao?: string;
    sono: SonoAnamneseDto;
}
export declare class AntecedentesPessoaisAnamneseDto {
    doencas_previas?: string[];
    cirurgias?: string[];
    alergias?: AlergiaAnamneseDto[];
    medicamentos_uso_continuo?: string[];
    internacoes?: string[];
}
export declare class HistoriaDoencaAtualAnamneseDto {
    descricao: string;
    data_inicio_sintomas?: CreateDataInfoDto;
    localizacao?: string;
    intensidade?: number;
    fatores_melhora?: string;
    fatores_piora?: string;
}
export declare class CampoEspecialidadeAnamneseDto {
    chave: string;
    valor?: unknown;
}
export declare class CreateAnamneseDto {
    paciente_id: string;
    profissional_criacao_id: string;
    data_criacao: CreateDataInfoDto;
    queixa_principal: string;
    historia_doenca_atual: HistoriaDoencaAtualAnamneseDto;
    antecedentes_pessoais: AntecedentesPessoaisAnamneseDto;
    antecedentes_familiares?: string[];
    habitos_vida: HabitosVidaAnamneseDto;
    campos_especialidade?: CampoEspecialidadeAnamneseDto[];
    cids?: string[];
}
