export declare class Endereco {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
}
export declare const EnderecoSchema: import("mongoose").Schema<Endereco, import("mongoose").Model<Endereco, any, any, any, any, any, Endereco>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    logradouro?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    numero?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    complemento?: import("mongoose").SchemaDefinitionProperty<string | undefined, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bairro?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cidade?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    estado?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cep?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pais?: import("mongoose").SchemaDefinitionProperty<string, Endereco, import("mongoose").Document<unknown, {}, Endereco, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Endereco & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Endereco>;
