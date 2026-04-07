import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type AnamneseDocument = HydratedDocument<Anamnese>;
export declare class AlergiaAnamnese {
    tipo: string;
    substancia: string;
    gravidade: string;
    reacao?: string;
}
export declare const AlergiaAnamneseSchema: MongooseSchema<AlergiaAnamnese, import("mongoose").Model<AlergiaAnamnese, any, any, any, any, any, AlergiaAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AlergiaAnamnese, import("mongoose").Document<unknown, {}, AlergiaAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AlergiaAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tipo?: import("mongoose").SchemaDefinitionProperty<string, AlergiaAnamnese, import("mongoose").Document<unknown, {}, AlergiaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AlergiaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    substancia?: import("mongoose").SchemaDefinitionProperty<string, AlergiaAnamnese, import("mongoose").Document<unknown, {}, AlergiaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AlergiaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    gravidade?: import("mongoose").SchemaDefinitionProperty<string, AlergiaAnamnese, import("mongoose").Document<unknown, {}, AlergiaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AlergiaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    reacao?: import("mongoose").SchemaDefinitionProperty<string | undefined, AlergiaAnamnese, import("mongoose").Document<unknown, {}, AlergiaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AlergiaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AlergiaAnamnese>;
export declare class TabagismoAnamnese {
    status: string;
    quantidade_por_dia?: number;
    tempo_anos?: number;
}
export declare const TabagismoAnamneseSchema: MongooseSchema<TabagismoAnamnese, import("mongoose").Model<TabagismoAnamnese, any, any, any, any, any, TabagismoAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TabagismoAnamnese, import("mongoose").Document<unknown, {}, TabagismoAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TabagismoAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    status?: import("mongoose").SchemaDefinitionProperty<string, TabagismoAnamnese, import("mongoose").Document<unknown, {}, TabagismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabagismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    quantidade_por_dia?: import("mongoose").SchemaDefinitionProperty<number | undefined, TabagismoAnamnese, import("mongoose").Document<unknown, {}, TabagismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabagismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tempo_anos?: import("mongoose").SchemaDefinitionProperty<number | undefined, TabagismoAnamnese, import("mongoose").Document<unknown, {}, TabagismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TabagismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TabagismoAnamnese>;
export declare class EtilismoAnamnese {
    status: string;
    frequencia?: string;
    tipo?: string;
}
export declare const EtilismoAnamneseSchema: MongooseSchema<EtilismoAnamnese, import("mongoose").Model<EtilismoAnamnese, any, any, any, any, any, EtilismoAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EtilismoAnamnese, import("mongoose").Document<unknown, {}, EtilismoAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<EtilismoAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    status?: import("mongoose").SchemaDefinitionProperty<string, EtilismoAnamnese, import("mongoose").Document<unknown, {}, EtilismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EtilismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    frequencia?: import("mongoose").SchemaDefinitionProperty<string | undefined, EtilismoAnamnese, import("mongoose").Document<unknown, {}, EtilismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EtilismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string | undefined, EtilismoAnamnese, import("mongoose").Document<unknown, {}, EtilismoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EtilismoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, EtilismoAnamnese>;
export declare class AtividadeFisicaAnamnese {
    pratica: boolean;
    tipo?: string;
    frequencia_semanal?: string;
}
export declare const AtividadeFisicaAnamneseSchema: MongooseSchema<AtividadeFisicaAnamnese, import("mongoose").Model<AtividadeFisicaAnamnese, any, any, any, any, any, AtividadeFisicaAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AtividadeFisicaAnamnese, import("mongoose").Document<unknown, {}, AtividadeFisicaAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AtividadeFisicaAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    pratica?: import("mongoose").SchemaDefinitionProperty<boolean, AtividadeFisicaAnamnese, import("mongoose").Document<unknown, {}, AtividadeFisicaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtividadeFisicaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string | undefined, AtividadeFisicaAnamnese, import("mongoose").Document<unknown, {}, AtividadeFisicaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtividadeFisicaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    frequencia_semanal?: import("mongoose").SchemaDefinitionProperty<string | undefined, AtividadeFisicaAnamnese, import("mongoose").Document<unknown, {}, AtividadeFisicaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtividadeFisicaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AtividadeFisicaAnamnese>;
export declare class SonoAnamnese {
    qualidade: string;
    horas_por_noite?: number;
}
export declare const SonoAnamneseSchema: MongooseSchema<SonoAnamnese, import("mongoose").Model<SonoAnamnese, any, any, any, any, any, SonoAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SonoAnamnese, import("mongoose").Document<unknown, {}, SonoAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SonoAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    qualidade?: import("mongoose").SchemaDefinitionProperty<string, SonoAnamnese, import("mongoose").Document<unknown, {}, SonoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SonoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    horas_por_noite?: import("mongoose").SchemaDefinitionProperty<number | undefined, SonoAnamnese, import("mongoose").Document<unknown, {}, SonoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SonoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SonoAnamnese>;
export declare class HabitosVidaAnamnese {
    tabagismo: TabagismoAnamnese;
    etilismo: EtilismoAnamnese;
    atividade_fisica: AtividadeFisicaAnamnese;
    alimentacao?: string;
    sono: SonoAnamnese;
}
export declare const HabitosVidaAnamneseSchema: MongooseSchema<HabitosVidaAnamnese, import("mongoose").Model<HabitosVidaAnamnese, any, any, any, any, any, HabitosVidaAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tabagismo?: import("mongoose").SchemaDefinitionProperty<TabagismoAnamnese, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    etilismo?: import("mongoose").SchemaDefinitionProperty<EtilismoAnamnese, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    atividade_fisica?: import("mongoose").SchemaDefinitionProperty<AtividadeFisicaAnamnese, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    alimentacao?: import("mongoose").SchemaDefinitionProperty<string | undefined, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sono?: import("mongoose").SchemaDefinitionProperty<SonoAnamnese, HabitosVidaAnamnese, import("mongoose").Document<unknown, {}, HabitosVidaAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HabitosVidaAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, HabitosVidaAnamnese>;
export declare class AntecedentesPessoaisAnamnese {
    doencas_previas: string[];
    cirurgias: string[];
    alergias: AlergiaAnamnese[];
    medicamentos_uso_continuo: string[];
    internacoes: string[];
}
export declare const AntecedentesPessoaisAnamneseSchema: MongooseSchema<AntecedentesPessoaisAnamnese, import("mongoose").Model<AntecedentesPessoaisAnamnese, any, any, any, any, any, AntecedentesPessoaisAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    doencas_previas?: import("mongoose").SchemaDefinitionProperty<string[], AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cirurgias?: import("mongoose").SchemaDefinitionProperty<string[], AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    alergias?: import("mongoose").SchemaDefinitionProperty<AlergiaAnamnese[], AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    medicamentos_uso_continuo?: import("mongoose").SchemaDefinitionProperty<string[], AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    internacoes?: import("mongoose").SchemaDefinitionProperty<string[], AntecedentesPessoaisAnamnese, import("mongoose").Document<unknown, {}, AntecedentesPessoaisAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AntecedentesPessoaisAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AntecedentesPessoaisAnamnese>;
export declare class HistoriaDoencaAtualAnamnese {
    descricao: string;
    data_inicio_sintomas?: DataInfo;
    localizacao?: string;
    intensidade?: number;
    fatores_melhora?: string;
    fatores_piora?: string;
}
export declare const HistoriaDoencaAtualAnamneseSchema: MongooseSchema<HistoriaDoencaAtualAnamnese, import("mongoose").Model<HistoriaDoencaAtualAnamnese, any, any, any, any, any, HistoriaDoencaAtualAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    descricao?: import("mongoose").SchemaDefinitionProperty<string, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_inicio_sintomas?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    localizacao?: import("mongoose").SchemaDefinitionProperty<string | undefined, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    intensidade?: import("mongoose").SchemaDefinitionProperty<number | undefined, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fatores_melhora?: import("mongoose").SchemaDefinitionProperty<string | undefined, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fatores_piora?: import("mongoose").SchemaDefinitionProperty<string | undefined, HistoriaDoencaAtualAnamnese, import("mongoose").Document<unknown, {}, HistoriaDoencaAtualAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoriaDoencaAtualAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, HistoriaDoencaAtualAnamnese>;
export declare class HistoricoAtualizacaoAnamnese {
    data_alteracao: DataInfo;
    profissional_id: Types.ObjectId;
    campo_alterado: string;
    valor_anterior?: unknown;
    valor_novo?: unknown;
    motivo?: string;
}
export declare const HistoricoAtualizacaoAnamneseSchema: MongooseSchema<HistoricoAtualizacaoAnamnese, import("mongoose").Model<HistoricoAtualizacaoAnamnese, any, any, any, any, any, HistoricoAtualizacaoAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    data_alteracao?: import("mongoose").SchemaDefinitionProperty<DataInfo, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campo_alterado?: import("mongoose").SchemaDefinitionProperty<string, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor_anterior?: import("mongoose").SchemaDefinitionProperty<unknown, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor_novo?: import("mongoose").SchemaDefinitionProperty<unknown, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    motivo?: import("mongoose").SchemaDefinitionProperty<string | undefined, HistoricoAtualizacaoAnamnese, import("mongoose").Document<unknown, {}, HistoricoAtualizacaoAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HistoricoAtualizacaoAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, HistoricoAtualizacaoAnamnese>;
export declare class CampoEspecialidadeAnamnese {
    chave: string;
    valor?: unknown;
}
export declare const CampoEspecialidadeAnamneseSchema: MongooseSchema<CampoEspecialidadeAnamnese, import("mongoose").Model<CampoEspecialidadeAnamnese, any, any, any, any, any, CampoEspecialidadeAnamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CampoEspecialidadeAnamnese, import("mongoose").Document<unknown, {}, CampoEspecialidadeAnamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CampoEspecialidadeAnamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    chave?: import("mongoose").SchemaDefinitionProperty<string, CampoEspecialidadeAnamnese, import("mongoose").Document<unknown, {}, CampoEspecialidadeAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CampoEspecialidadeAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    valor?: import("mongoose").SchemaDefinitionProperty<unknown, CampoEspecialidadeAnamnese, import("mongoose").Document<unknown, {}, CampoEspecialidadeAnamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CampoEspecialidadeAnamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CampoEspecialidadeAnamnese>;
export declare class Anamnese {
    paciente_id: Types.ObjectId;
    profissional_criacao_id: Types.ObjectId;
    data_criacao: DataInfo;
    queixa_principal: string;
    historia_doenca_atual: HistoriaDoencaAtualAnamnese;
    antecedentes_pessoais: AntecedentesPessoaisAnamnese;
    antecedentes_familiares: string[];
    habitos_vida: HabitosVidaAnamnese;
    campos_especialidade: CampoEspecialidadeAnamnese[];
    cids: string[];
    historico_atualizacoes: HistoricoAtualizacaoAnamnese[];
}
export declare const AnamneseSchema: MongooseSchema<Anamnese, import("mongoose").Model<Anamnese, any, any, any, any, any, Anamnese>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    paciente_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_criacao_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_criacao?: import("mongoose").SchemaDefinitionProperty<DataInfo, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    queixa_principal?: import("mongoose").SchemaDefinitionProperty<string, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    historia_doenca_atual?: import("mongoose").SchemaDefinitionProperty<HistoriaDoencaAtualAnamnese, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    antecedentes_pessoais?: import("mongoose").SchemaDefinitionProperty<AntecedentesPessoaisAnamnese, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    antecedentes_familiares?: import("mongoose").SchemaDefinitionProperty<string[], Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    habitos_vida?: import("mongoose").SchemaDefinitionProperty<HabitosVidaAnamnese, Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    campos_especialidade?: import("mongoose").SchemaDefinitionProperty<CampoEspecialidadeAnamnese[], Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cids?: import("mongoose").SchemaDefinitionProperty<string[], Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    historico_atualizacoes?: import("mongoose").SchemaDefinitionProperty<HistoricoAtualizacaoAnamnese[], Anamnese, import("mongoose").Document<unknown, {}, Anamnese, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Anamnese & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Anamnese>;
