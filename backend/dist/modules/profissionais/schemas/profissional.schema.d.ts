import { HydratedDocument, Types } from 'mongoose';
import { Contato } from '../../../common/schemas/contato.schema';
export type ProfissionalDocument = HydratedDocument<Profissional>;
export declare class RegistroProfissional {
    crm: string;
    uf_crm: string;
    especialidades: string[];
}
export declare const RegistroProfissionalSchema: import("mongoose").Schema<RegistroProfissional, import("mongoose").Model<RegistroProfissional, any, any, any, any, any, RegistroProfissional>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RegistroProfissional, import("mongoose").Document<unknown, {}, RegistroProfissional, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<RegistroProfissional & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    crm?: import("mongoose").SchemaDefinitionProperty<string, RegistroProfissional, import("mongoose").Document<unknown, {}, RegistroProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RegistroProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    uf_crm?: import("mongoose").SchemaDefinitionProperty<string, RegistroProfissional, import("mongoose").Document<unknown, {}, RegistroProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RegistroProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    especialidades?: import("mongoose").SchemaDefinitionProperty<string[], RegistroProfissional, import("mongoose").Document<unknown, {}, RegistroProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RegistroProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, RegistroProfissional>;
export declare class Profissional {
    nome_completo: string;
    cpf: string;
    perfil: string;
    registro_profissional?: RegistroProfissional;
    contato: Contato;
    locais_vinculados: Types.ObjectId[];
    ativo: boolean;
}
export declare const ProfissionalSchema: import("mongoose").Schema<Profissional, import("mongoose").Model<Profissional, any, any, any, any, any, Profissional>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome_completo?: import("mongoose").SchemaDefinitionProperty<string, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cpf?: import("mongoose").SchemaDefinitionProperty<string, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    perfil?: import("mongoose").SchemaDefinitionProperty<string, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    registro_profissional?: import("mongoose").SchemaDefinitionProperty<RegistroProfissional | undefined, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contato?: import("mongoose").SchemaDefinitionProperty<Contato, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    locais_vinculados?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId[], Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Profissional, import("mongoose").Document<unknown, {}, Profissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Profissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Profissional>;
