import { HydratedDocument, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type LancamentoReceitaDocument = HydratedDocument<LancamentoReceita>;
export declare class DadosConvenioReceita {
    convenio_id: Types.ObjectId;
    numero_guia: string;
    codigo_procedimento: string;
    valor_tabela: number;
    status_faturamento: string;
}
export declare const DadosConvenioReceitaSchema: import("mongoose").Schema<DadosConvenioReceita, import("mongoose").Model<DadosConvenioReceita, any, any, any, any, any, DadosConvenioReceita>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    convenio_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    numero_guia?: import("mongoose").SchemaDefinitionProperty<string, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    codigo_procedimento?: import("mongoose").SchemaDefinitionProperty<string, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor_tabela?: import("mongoose").SchemaDefinitionProperty<number, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status_faturamento?: import("mongoose").SchemaDefinitionProperty<string, DadosConvenioReceita, import("mongoose").Document<unknown, {}, DadosConvenioReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosConvenioReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DadosConvenioReceita>;
export declare class DadosParticularReceita {
    valor_cobrado: number;
    valor_pago: number;
    desconto: number;
    troco: number;
}
export declare const DadosParticularReceitaSchema: import("mongoose").Schema<DadosParticularReceita, import("mongoose").Model<DadosParticularReceita, any, any, any, any, any, DadosParticularReceita>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DadosParticularReceita, import("mongoose").Document<unknown, {}, DadosParticularReceita, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DadosParticularReceita & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    valor_cobrado?: import("mongoose").SchemaDefinitionProperty<number, DadosParticularReceita, import("mongoose").Document<unknown, {}, DadosParticularReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosParticularReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor_pago?: import("mongoose").SchemaDefinitionProperty<number, DadosParticularReceita, import("mongoose").Document<unknown, {}, DadosParticularReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosParticularReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    desconto?: import("mongoose").SchemaDefinitionProperty<number, DadosParticularReceita, import("mongoose").Document<unknown, {}, DadosParticularReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosParticularReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    troco?: import("mongoose").SchemaDefinitionProperty<number, DadosParticularReceita, import("mongoose").Document<unknown, {}, DadosParticularReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DadosParticularReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DadosParticularReceita>;
export declare const FORMA_PAGAMENTO: readonly ["dinheiro", "cartao_credito", "cartao_debito", "pix", "convenio"];
export declare const STATUS_PAGAMENTO: readonly ["pendente", "pago", "parcial", "cancelado", "estornado"];
export declare class LancamentoReceita {
    atendimento_id: Types.ObjectId;
    paciente_id: Types.ObjectId;
    profissional_id: Types.ObjectId;
    forma_pagamento: string;
    dados_convenio?: DadosConvenioReceita;
    dados_particular?: DadosParticularReceita;
    data_pagamento: DataInfo;
    status_pagamento: string;
    tipo: string;
    categoria: string;
    valor_final: number;
}
export declare const LancamentoReceitaSchema: import("mongoose").Schema<LancamentoReceita, import("mongoose").Model<LancamentoReceita, any, any, any, any, any, LancamentoReceita>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    atendimento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paciente_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    forma_pagamento?: import("mongoose").SchemaDefinitionProperty<string, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dados_convenio?: import("mongoose").SchemaDefinitionProperty<DadosConvenioReceita | undefined, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dados_particular?: import("mongoose").SchemaDefinitionProperty<DadosParticularReceita | undefined, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_pagamento?: import("mongoose").SchemaDefinitionProperty<DataInfo, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status_pagamento?: import("mongoose").SchemaDefinitionProperty<string, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categoria?: import("mongoose").SchemaDefinitionProperty<string, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor_final?: import("mongoose").SchemaDefinitionProperty<number, LancamentoReceita, import("mongoose").Document<unknown, {}, LancamentoReceita, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LancamentoReceita & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LancamentoReceita>;
