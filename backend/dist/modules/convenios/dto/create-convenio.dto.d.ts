export declare class ContatoConvenioDto {
    telefone?: string;
    email?: string;
    representante?: string;
}
export declare class TabelaProcedimentoDto {
    codigo: string;
    descricao: string;
    valor: number;
}
export declare class CreateConvenioDto {
    nome_convenio: string;
    codigo_ans?: string;
    contato?: ContatoConvenioDto;
    tabela_procedimentos?: TabelaProcedimentoDto[];
    ativo?: boolean;
}
