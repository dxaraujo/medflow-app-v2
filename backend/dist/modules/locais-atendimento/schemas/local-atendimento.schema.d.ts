import { HydratedDocument, Types } from 'mongoose';
import { Endereco } from '../../../common/schemas/endereco.schema';
export type LocalAtendimentoDocument = HydratedDocument<LocalAtendimento>;
export declare class HorarioFuncionamento {
    dia_semana: number;
    hora_inicio: string;
    hora_fim: string;
}
export declare const HorarioFuncionamentoSchema: import("mongoose").Schema<HorarioFuncionamento, import("mongoose").Model<HorarioFuncionamento, any, any, any, any, any, HorarioFuncionamento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HorarioFuncionamento, import("mongoose").Document<unknown, {}, HorarioFuncionamento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<HorarioFuncionamento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    dia_semana?: import("mongoose").SchemaDefinitionProperty<number, HorarioFuncionamento, import("mongoose").Document<unknown, {}, HorarioFuncionamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HorarioFuncionamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hora_inicio?: import("mongoose").SchemaDefinitionProperty<string, HorarioFuncionamento, import("mongoose").Document<unknown, {}, HorarioFuncionamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HorarioFuncionamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hora_fim?: import("mongoose").SchemaDefinitionProperty<string, HorarioFuncionamento, import("mongoose").Document<unknown, {}, HorarioFuncionamento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HorarioFuncionamento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, HorarioFuncionamento>;
export declare class DuracoesPorTipo {
    primeira_consulta: number;
    consulta: number;
    retorno: number;
    encaixe: number;
    telemedicina: number;
}
export declare const DuracoesPorTipoSchema: import("mongoose").Schema<DuracoesPorTipo, import("mongoose").Model<DuracoesPorTipo, any, any, any, any, any, DuracoesPorTipo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    primeira_consulta?: import("mongoose").SchemaDefinitionProperty<number, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    consulta?: import("mongoose").SchemaDefinitionProperty<number, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    retorno?: import("mongoose").SchemaDefinitionProperty<number, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    encaixe?: import("mongoose").SchemaDefinitionProperty<number, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telemedicina?: import("mongoose").SchemaDefinitionProperty<number, DuracoesPorTipo, import("mongoose").Document<unknown, {}, DuracoesPorTipo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DuracoesPorTipo & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DuracoesPorTipo>;
export declare class ConfiguracaoProfissional {
    profissional_id: Types.ObjectId;
    horarios_funcionamento: HorarioFuncionamento[];
    duracoes_por_tipo: DuracoesPorTipo;
}
export declare const ConfiguracaoProfissionalSchema: import("mongoose").Schema<ConfiguracaoProfissional, import("mongoose").Model<ConfiguracaoProfissional, any, any, any, any, any, ConfiguracaoProfissional>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ConfiguracaoProfissional, import("mongoose").Document<unknown, {}, ConfiguracaoProfissional, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ConfiguracaoProfissional & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ConfiguracaoProfissional, import("mongoose").Document<unknown, {}, ConfiguracaoProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConfiguracaoProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    horarios_funcionamento?: import("mongoose").SchemaDefinitionProperty<HorarioFuncionamento[], ConfiguracaoProfissional, import("mongoose").Document<unknown, {}, ConfiguracaoProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConfiguracaoProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracoes_por_tipo?: import("mongoose").SchemaDefinitionProperty<DuracoesPorTipo, ConfiguracaoProfissional, import("mongoose").Document<unknown, {}, ConfiguracaoProfissional, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ConfiguracaoProfissional & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ConfiguracaoProfissional>;
export declare class LocalAtendimento {
    nome: string;
    endereco: Endereco;
    telefone: string;
    cnes?: string;
    ativo: boolean;
    configuracoes_profissionais: ConfiguracaoProfissional[];
}
export declare const LocalAtendimentoSchema: import("mongoose").Schema<LocalAtendimento, import("mongoose").Model<LocalAtendimento, any, any, any, any, any, LocalAtendimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome?: import("mongoose").SchemaDefinitionProperty<string, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endereco?: import("mongoose").SchemaDefinitionProperty<Endereco, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    telefone?: import("mongoose").SchemaDefinitionProperty<string, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cnes?: import("mongoose").SchemaDefinitionProperty<string | undefined, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ativo?: import("mongoose").SchemaDefinitionProperty<boolean, LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    configuracoes_profissionais?: import("mongoose").SchemaDefinitionProperty<ConfiguracaoProfissional[], LocalAtendimento, import("mongoose").Document<unknown, {}, LocalAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<LocalAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, LocalAtendimento>;
