import { HydratedDocument, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type AgendamentoDocument = HydratedDocument<Agendamento>;
export declare class RecorrenciaBloqueio {
    dias_semana: number[];
    hora_inicio?: string;
    hora_fim?: string;
}
export declare const RecorrenciaBloqueioSchema: import("mongoose").Schema<RecorrenciaBloqueio, import("mongoose").Model<RecorrenciaBloqueio, any, any, any, any, any, RecorrenciaBloqueio>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RecorrenciaBloqueio, import("mongoose").Document<unknown, {}, RecorrenciaBloqueio, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<RecorrenciaBloqueio & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    dias_semana?: import("mongoose").SchemaDefinitionProperty<number[], RecorrenciaBloqueio, import("mongoose").Document<unknown, {}, RecorrenciaBloqueio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RecorrenciaBloqueio & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hora_inicio?: import("mongoose").SchemaDefinitionProperty<string | undefined, RecorrenciaBloqueio, import("mongoose").Document<unknown, {}, RecorrenciaBloqueio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RecorrenciaBloqueio & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hora_fim?: import("mongoose").SchemaDefinitionProperty<string | undefined, RecorrenciaBloqueio, import("mongoose").Document<unknown, {}, RecorrenciaBloqueio, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RecorrenciaBloqueio & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, RecorrenciaBloqueio>;
export declare class BloqueioAgendamento {
    motivo?: string;
    categoria: string;
    recorrente: boolean;
    recorrencia?: RecorrenciaBloqueio;
}
export declare const BloqueioAgendamentoSchema: import("mongoose").Schema<BloqueioAgendamento, import("mongoose").Model<BloqueioAgendamento, any, any, any, any, any, BloqueioAgendamento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BloqueioAgendamento, import("mongoose").Document<unknown, {}, BloqueioAgendamento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<BloqueioAgendamento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    motivo?: import("mongoose").SchemaDefinitionProperty<string | undefined, BloqueioAgendamento, import("mongoose").Document<unknown, {}, BloqueioAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BloqueioAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categoria?: import("mongoose").SchemaDefinitionProperty<string, BloqueioAgendamento, import("mongoose").Document<unknown, {}, BloqueioAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BloqueioAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recorrente?: import("mongoose").SchemaDefinitionProperty<boolean, BloqueioAgendamento, import("mongoose").Document<unknown, {}, BloqueioAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BloqueioAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    recorrencia?: import("mongoose").SchemaDefinitionProperty<RecorrenciaBloqueio | undefined, BloqueioAgendamento, import("mongoose").Document<unknown, {}, BloqueioAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<BloqueioAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, BloqueioAgendamento>;
export declare class TelemedicinaAgendamento {
    link_sala_virtual: string;
    plataforma?: string;
}
export declare const TelemedicinaAgendamentoSchema: import("mongoose").Schema<TelemedicinaAgendamento, import("mongoose").Model<TelemedicinaAgendamento, any, any, any, any, any, TelemedicinaAgendamento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TelemedicinaAgendamento, import("mongoose").Document<unknown, {}, TelemedicinaAgendamento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TelemedicinaAgendamento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    link_sala_virtual?: import("mongoose").SchemaDefinitionProperty<string, TelemedicinaAgendamento, import("mongoose").Document<unknown, {}, TelemedicinaAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TelemedicinaAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    plataforma?: import("mongoose").SchemaDefinitionProperty<string | undefined, TelemedicinaAgendamento, import("mongoose").Document<unknown, {}, TelemedicinaAgendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TelemedicinaAgendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TelemedicinaAgendamento>;
export declare const TIPO_AGENDAMENTO: readonly ["primeira_consulta", "consulta", "retorno", "encaixe", "telemedicina", "bloqueio"];
export declare const STATUS_AGENDAMENTO: readonly ["agendado", "confirmado", "em_espera", "em_atendimento", "finalizado", "cancelado", "faltou", "bloqueado"];
export declare class Agendamento {
    profissional_id: Types.ObjectId;
    local_atendimento_id: Types.ObjectId;
    tipo: string;
    paciente_id?: Types.ObjectId;
    data_horario_inicio: DataInfo;
    data_horario_fim?: DataInfo;
    duracao_minutos: number;
    duracao_personalizada: boolean;
    duracao_padrao_tipo_minutos: number;
    bloqueio?: BloqueioAgendamento;
    telemedicina?: TelemedicinaAgendamento;
    status: string;
    is_encaixe: boolean;
    observacoes?: string;
    nome_paciente?: string;
    nome_profissional: string;
    telefone_paciente?: string;
    convenio_nome?: string;
}
export declare const AgendamentoSchema: import("mongoose").Schema<Agendamento, import("mongoose").Model<Agendamento, any, any, any, any, any, Agendamento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    local_atendimento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    paciente_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_horario_inicio?: import("mongoose").SchemaDefinitionProperty<DataInfo, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_horario_fim?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracao_minutos?: import("mongoose").SchemaDefinitionProperty<number, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracao_personalizada?: import("mongoose").SchemaDefinitionProperty<boolean, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracao_padrao_tipo_minutos?: import("mongoose").SchemaDefinitionProperty<number, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bloqueio?: import("mongoose").SchemaDefinitionProperty<BloqueioAgendamento | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telemedicina?: import("mongoose").SchemaDefinitionProperty<TelemedicinaAgendamento | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_encaixe?: import("mongoose").SchemaDefinitionProperty<boolean, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacoes?: import("mongoose").SchemaDefinitionProperty<string | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_paciente?: import("mongoose").SchemaDefinitionProperty<string | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_profissional?: import("mongoose").SchemaDefinitionProperty<string, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telefone_paciente?: import("mongoose").SchemaDefinitionProperty<string | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    convenio_nome?: import("mongoose").SchemaDefinitionProperty<string | undefined, Agendamento, import("mongoose").Document<unknown, {}, Agendamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Agendamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Agendamento>;
