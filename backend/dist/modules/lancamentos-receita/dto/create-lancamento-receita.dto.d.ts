import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class DadosConvenioReceitaDto {
    convenio_id: string;
    numero_guia: string;
    codigo_procedimento: string;
    valor_tabela: number;
    status_faturamento: string;
}
export declare class DadosParticularReceitaDto {
    valor_cobrado: number;
    valor_pago: number;
    desconto?: number;
    troco?: number;
}
export declare class CreateLancamentoReceitaDto {
    atendimento_id: string;
    paciente_id: string;
    profissional_id: string;
    forma_pagamento: string;
    dados_convenio?: DadosConvenioReceitaDto;
    dados_particular?: DadosParticularReceitaDto;
    data_pagamento: CreateDataInfoDto;
    status_pagamento: string;
    categoria: string;
    valor_final: number;
}
