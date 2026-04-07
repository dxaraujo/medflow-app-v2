import { CreateEnderecoDto } from '../../../common/dto/endereco.dto';
export declare class HorarioFuncionamentoDto {
    dia_semana: number;
    hora_inicio: string;
    hora_fim: string;
}
export declare class DuracoesPorTipoDto {
    primeira_consulta: number;
    consulta: number;
    retorno: number;
    encaixe: number;
    telemedicina: number;
}
export declare class ConfiguracaoProfissionalDto {
    profissional_id: string;
    horarios_funcionamento?: HorarioFuncionamentoDto[];
    duracoes_por_tipo: DuracoesPorTipoDto;
}
export declare class CreateLocalAtendimentoDto {
    nome: string;
    endereco: CreateEnderecoDto;
    telefone: string;
    cnes?: string;
    ativo?: boolean;
    configuracoes_profissionais?: ConfiguracaoProfissionalDto[];
}
