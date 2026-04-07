import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
export declare class CreateContaPagarDto {
    descricao: string;
    fornecedor?: string;
    categoria_despesa: string;
    valor: number;
    data_vencimento: CreateDataInfoDto;
    data_pagamento?: CreateDataInfoDto;
    status: string;
    forma_pagamento?: string;
    recorrente?: boolean;
    observacoes?: string;
    categoria: string;
}
