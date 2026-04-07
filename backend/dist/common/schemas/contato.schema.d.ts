export declare class ContatoEmergencia {
    nome: string;
    parentesco?: string;
    telefone: string;
}
export declare const ContatoEmergenciaSchema: import("mongoose").Schema<ContatoEmergencia, import("mongoose").Model<ContatoEmergencia, any, any, any, any, any, ContatoEmergencia>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContatoEmergencia, import("mongoose").Document<unknown, {}, ContatoEmergencia, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ContatoEmergencia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome?: import("mongoose").SchemaDefinitionProperty<string, ContatoEmergencia, import("mongoose").Document<unknown, {}, ContatoEmergencia, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoEmergencia & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    parentesco?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContatoEmergencia, import("mongoose").Document<unknown, {}, ContatoEmergencia, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoEmergencia & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telefone?: import("mongoose").SchemaDefinitionProperty<string, ContatoEmergencia, import("mongoose").Document<unknown, {}, ContatoEmergencia, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ContatoEmergencia & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ContatoEmergencia>;
export declare class Contato {
    telefone_principal: string;
    telefone_secundario?: string;
    email?: string;
    contato_emergencia?: ContatoEmergencia;
}
export declare const ContatoSchema: import("mongoose").Schema<Contato, import("mongoose").Model<Contato, any, any, any, any, any, Contato>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contato, import("mongoose").Document<unknown, {}, Contato, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Contato & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    telefone_principal?: import("mongoose").SchemaDefinitionProperty<string, Contato, import("mongoose").Document<unknown, {}, Contato, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contato & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telefone_secundario?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contato, import("mongoose").Document<unknown, {}, Contato, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contato & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, Contato, import("mongoose").Document<unknown, {}, Contato, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contato & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contato_emergencia?: import("mongoose").SchemaDefinitionProperty<ContatoEmergencia | undefined, Contato, import("mongoose").Document<unknown, {}, Contato, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Contato & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Contato>;
