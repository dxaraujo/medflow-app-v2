import { HydratedDocument } from 'mongoose';
export type ConvenioDocument = HydratedDocument<Convenio>;
export declare class ContatoConvenio {
    telefone?: string;
    email?: string;
    representante?: string;
}
export declare const ContatoConvenioSchema: import("mongoose").Schema<ContatoConvenio, import("mongoose").Model<ContatoConvenio, any, any, any, any, any, ContatoConvenio>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContatoConvenio, import("mongoose").Document<unknown, {}, ContatoConvenio, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ContatoConvenio & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    telefone?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContatoConvenio, import("mongoose").Document<unknown, {}, ContatoConvenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoConvenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContatoConvenio, import("mongoose").Document<unknown, {}, ContatoConvenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoConvenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    representante?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContatoConvenio, import("mongoose").Document<unknown, {}, ContatoConvenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoConvenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ContatoConvenio>;
export declare class TabelaProcedimento {
    codigo: string;
    descricao: string;
    valor: number;
}
export declare const TabelaProcedimentoSchema: import("mongoose").Schema<TabelaProcedimento, import("mongoose").Model<TabelaProcedimento, any, any, any, any, any, TabelaProcedimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TabelaProcedimento, import("mongoose").Document<unknown, {}, TabelaProcedimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TabelaProcedimento & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    codigo?: import("mongoose").SchemaDefinitionProperty<string, TabelaProcedimento, import("mongoose").Document<unknown, {}, TabelaProcedimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabelaProcedimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, TabelaProcedimento, import("mongoose").Document<unknown, {}, TabelaProcedimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabelaProcedimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor?: import("mongoose").SchemaDefinitionProperty<number, TabelaProcedimento, import("mongoose").Document<unknown, {}, TabelaProcedimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabelaProcedimento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TabelaProcedimento>;
export declare class Convenio {
    nome_convenio: string;
    codigo_ans?: string;
    contato?: ContatoConvenio;
    tabela_procedimentos: TabelaProcedimento[];
    ativo: boolean;
}
export declare const ConvenioSchema: import("mongoose").Schema<Convenio, import("mongoose").Model<Convenio, any, any, any, any, any, Convenio>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Convenio, import("mongoose").Document<unknown, {}, Convenio, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome_convenio?: import("mongoose").SchemaDefinitionProperty<string, Convenio, import("mongoose").Document<unknown, {}, Convenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    codigo_ans?: import("mongoose").SchemaDefinitionProperty<string | undefined, Convenio, import("mongoose").Document<unknown, {}, Convenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contato?: import("mongoose").SchemaDefinitionProperty<ContatoConvenio | undefined, Convenio, import("mongoose").Document<unknown, {}, Convenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tabela_procedimentos?: import("mongoose").SchemaDefinitionProperty<TabelaProcedimento[], Convenio, import("mongoose").Document<unknown, {}, Convenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Convenio, import("mongoose").Document<unknown, {}, Convenio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Convenio & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Convenio>;
