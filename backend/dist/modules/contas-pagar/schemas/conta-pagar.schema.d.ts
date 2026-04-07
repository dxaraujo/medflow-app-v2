import { HydratedDocument } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type ContaPagarDocument = HydratedDocument<ContaPagar>;
export declare const CATEGORIA_DESPESA: readonly ["aluguel", "material", "salario", "servico", "imposto", "outro"];
export declare const STATUS_CONTA: readonly ["pendente", "pago", "vencido", "cancelado"];
export declare class ContaPagar {
    descricao: string;
    fornecedor?: string;
    categoria_despesa: string;
    valor: number;
    data_vencimento: DataInfo;
    data_pagamento?: DataInfo;
    status: string;
    forma_pagamento?: string;
    recorrente: boolean;
    observacoes?: string;
    tipo: string;
    categoria: string;
}
export declare const ContaPagarSchema: import("mongoose").Schema<ContaPagar, import("mongoose").Model<ContaPagar, any, any, any, any, any, ContaPagar>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    descricao?: import("mongoose").SchemaDefinitionProperty<string, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fornecedor?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categoria_despesa?: import("mongoose").SchemaDefinitionProperty<string, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor?: import("mongoose").SchemaDefinitionProperty<number, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_vencimento?: import("mongoose").SchemaDefinitionProperty<DataInfo, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_pagamento?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    forma_pagamento?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recorrente?: import("mongoose").SchemaDefinitionProperty<boolean, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacoes?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categoria?: import("mongoose").SchemaDefinitionProperty<string, ContaPagar, import("mongoose").Document<unknown, {}, ContaPagar, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContaPagar & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ContaPagar>;
