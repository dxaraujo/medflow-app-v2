import { HydratedDocument, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type FilaEsperaDocument = HydratedDocument<FilaEspera>;
export declare class TriagemFilaEspera {
    queixa_rapida?: string;
    pressao_arterial_sistolica?: number;
    pressao_arterial_diastolica?: number;
    temperatura?: number;
    peso?: number;
    altura?: number;
}
export declare const TriagemFilaEsperaSchema: import("mongoose").Schema<TriagemFilaEspera, import("mongoose").Model<TriagemFilaEspera, any, any, any, any, any, TriagemFilaEspera>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    queixa_rapida?: import("mongoose").SchemaDefinitionProperty<string | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pressao_arterial_sistolica?: import("mongoose").SchemaDefinitionProperty<number | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pressao_arterial_diastolica?: import("mongoose").SchemaDefinitionProperty<number | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    temperatura?: import("mongoose").SchemaDefinitionProperty<number | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    peso?: import("mongoose").SchemaDefinitionProperty<number | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    altura?: import("mongoose").SchemaDefinitionProperty<number | undefined, TriagemFilaEspera, import("mongoose").Document<unknown, {}, TriagemFilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TriagemFilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TriagemFilaEspera>;
export declare const PRIORIDADE_FILA: readonly ["normal", "prioritario", "urgente"];
export declare const STATUS_FILA: readonly ["aguardando", "em_atendimento", "atendido", "desistiu"];
export declare class FilaEspera {
    paciente_id: Types.ObjectId;
    agendamento_id?: Types.ObjectId;
    profissional_id: Types.ObjectId;
    local_atendimento_id: Types.ObjectId;
    horario_checkin: DataInfo;
    horario_inicio_atendimento?: DataInfo;
    horario_fim_atendimento?: DataInfo;
    prioridade: string;
    status: string;
    posicao_fila: number;
    triagem?: TriagemFilaEspera;
    nome_paciente: string;
    nome_profissional: string;
}
export declare const FilaEsperaSchema: import("mongoose").Schema<FilaEspera, import("mongoose").Model<FilaEspera, any, any, any, any, any, FilaEspera>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    paciente_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agendamento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    local_atendimento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    horario_checkin?: import("mongoose").SchemaDefinitionProperty<DataInfo, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    horario_inicio_atendimento?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    horario_fim_atendimento?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    prioridade?: import("mongoose").SchemaDefinitionProperty<string, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    posicao_fila?: import("mongoose").SchemaDefinitionProperty<number, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    triagem?: import("mongoose").SchemaDefinitionProperty<TriagemFilaEspera | undefined, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_paciente?: import("mongoose").SchemaDefinitionProperty<string, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_profissional?: import("mongoose").SchemaDefinitionProperty<string, FilaEspera, import("mongoose").Document<unknown, {}, FilaEspera, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<FilaEspera & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, FilaEspera>;
