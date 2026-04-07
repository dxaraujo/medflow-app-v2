import { HydratedDocument, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
import { Contato } from '../../../common/schemas/contato.schema';
import { Endereco } from '../../../common/schemas/endereco.schema';
export type PacienteDocument = HydratedDocument<Paciente>;
export declare class ConvenioPaciente {
    convenio_id: Types.ObjectId;
    numero_carteirinha: string;
    validade?: DataInfo;
    plano?: string;
}
export declare const ConvenioPacienteSchema: import("mongoose").Schema<ConvenioPaciente, import("mongoose").Model<ConvenioPaciente, any, any, any, any, any, ConvenioPaciente>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ConvenioPaciente, import("mongoose").Document<unknown, {}, ConvenioPaciente, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ConvenioPaciente & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    convenio_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ConvenioPaciente, import("mongoose").Document<unknown, {}, ConvenioPaciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConvenioPaciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    numero_carteirinha?: import("mongoose").SchemaDefinitionProperty<string, ConvenioPaciente, import("mongoose").Document<unknown, {}, ConvenioPaciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConvenioPaciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    validade?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, ConvenioPaciente, import("mongoose").Document<unknown, {}, ConvenioPaciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConvenioPaciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    plano?: import("mongoose").SchemaDefinitionProperty<string | undefined, ConvenioPaciente, import("mongoose").Document<unknown, {}, ConvenioPaciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConvenioPaciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ConvenioPaciente>;
export declare class Paciente {
    nome_completo: string;
    data_nascimento: DataInfo;
    sexo: string;
    cpf: string;
    rg?: string;
    nome_mae?: string;
    naturalidade?: string;
    contato: Contato;
    endereco: Endereco;
    convenios: ConvenioPaciente[];
    ativo: boolean;
}
export declare const PacienteSchema: import("mongoose").Schema<Paciente, import("mongoose").Model<Paciente, any, any, any, any, any, Paciente>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome_completo?: import("mongoose").SchemaDefinitionProperty<string, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_nascimento?: import("mongoose").SchemaDefinitionProperty<DataInfo, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sexo?: import("mongoose").SchemaDefinitionProperty<string, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cpf?: import("mongoose").SchemaDefinitionProperty<string, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rg?: import("mongoose").SchemaDefinitionProperty<string | undefined, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_mae?: import("mongoose").SchemaDefinitionProperty<string | undefined, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    naturalidade?: import("mongoose").SchemaDefinitionProperty<string | undefined, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    contato?: import("mongoose").SchemaDefinitionProperty<Contato, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endereco?: import("mongoose").SchemaDefinitionProperty<Endereco, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    convenios?: import("mongoose").SchemaDefinitionProperty<ConvenioPaciente[], Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, Paciente, import("mongoose").Document<unknown, {}, Paciente, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Paciente & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Paciente>;
