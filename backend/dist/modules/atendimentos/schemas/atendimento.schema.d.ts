import { HydratedDocument, Types } from 'mongoose';
import { DataInfo } from '../../../common/schemas/data-info.schema';
export type AtendimentoDocument = HydratedDocument<Atendimento>;
export declare const TIPOS_ATENDIMENTO: readonly ["primeira_consulta", "consulta", "retorno", "encaixe", "telemedicina"];
export type TipoAtendimento = (typeof TIPOS_ATENDIMENTO)[number];
export declare const STATUS_ATENDIMENTO: readonly ["em_andamento", "finalizado", "cancelado"];
export type StatusAtendimento = (typeof STATUS_ATENDIMENTO)[number];
export declare class SinaisVitais {
    pressao_arterial_sistolica?: number;
    pressao_arterial_diastolica?: number;
    frequencia_cardiaca?: number;
    frequencia_respiratoria?: number;
    temperatura?: number;
    saturacao_o2?: number;
    peso?: number;
    altura?: number;
    imc?: number;
    glicemia_capilar?: number;
    observacoes_vitais?: string;
}
export declare const SinaisVitaisSchema: import("mongoose").Schema<SinaisVitais, import("mongoose").Model<SinaisVitais, any, any, any, any, any, SinaisVitais>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    pressao_arterial_sistolica?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pressao_arterial_diastolica?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    frequencia_cardiaca?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    frequencia_respiratoria?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    temperatura?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    saturacao_o2?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    peso?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    altura?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    imc?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    glicemia_capilar?: import("mongoose").SchemaDefinitionProperty<number | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacoes_vitais?: import("mongoose").SchemaDefinitionProperty<string | undefined, SinaisVitais, import("mongoose").Document<unknown, {}, SinaisVitais, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SinaisVitais & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SinaisVitais>;
export declare class SegmentoExameFisico {
    normal: boolean;
    descricao: string;
}
export declare const SegmentoExameFisicoSchema: import("mongoose").Schema<SegmentoExameFisico, import("mongoose").Model<SegmentoExameFisico, any, any, any, any, any, SegmentoExameFisico>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SegmentoExameFisico, import("mongoose").Document<unknown, {}, SegmentoExameFisico, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SegmentoExameFisico & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    normal?: import("mongoose").SchemaDefinitionProperty<boolean, SegmentoExameFisico, import("mongoose").Document<unknown, {}, SegmentoExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentoExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string, SegmentoExameFisico, import("mongoose").Document<unknown, {}, SegmentoExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentoExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SegmentoExameFisico>;
export declare class SegmentarExameFisico {
    cabeca_pescoco?: SegmentoExameFisico;
    torax_pulmoes?: SegmentoExameFisico;
    cardiovascular?: SegmentoExameFisico;
    abdomen?: SegmentoExameFisico;
    extremidades?: SegmentoExameFisico;
    neurologico?: SegmentoExameFisico;
    pele?: SegmentoExameFisico;
}
export declare const SegmentarExameFisicoSchema: import("mongoose").Schema<SegmentarExameFisico, import("mongoose").Model<SegmentarExameFisico, any, any, any, any, any, SegmentarExameFisico>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    cabeca_pescoco?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    torax_pulmoes?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cardiovascular?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    abdomen?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    extremidades?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    neurologico?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pele?: import("mongoose").SchemaDefinitionProperty<SegmentoExameFisico | undefined, SegmentarExameFisico, import("mongoose").Document<unknown, {}, SegmentarExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<SegmentarExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SegmentarExameFisico>;
export declare class ExameFisico {
    estado_geral?: string;
    segmentar?: SegmentarExameFisico;
    exame_fisico_complementar?: string;
}
export declare const ExameFisicoSchema: import("mongoose").Schema<ExameFisico, import("mongoose").Model<ExameFisico, any, any, any, any, any, ExameFisico>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ExameFisico, import("mongoose").Document<unknown, {}, ExameFisico, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ExameFisico & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    estado_geral?: import("mongoose").SchemaDefinitionProperty<string | undefined, ExameFisico, import("mongoose").Document<unknown, {}, ExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    segmentar?: import("mongoose").SchemaDefinitionProperty<SegmentarExameFisico | undefined, ExameFisico, import("mongoose").Document<unknown, {}, ExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    exame_fisico_complementar?: import("mongoose").SchemaDefinitionProperty<string | undefined, ExameFisico, import("mongoose").Document<unknown, {}, ExameFisico, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ExameFisico & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ExameFisico>;
export declare class HipoteseDiagnostica {
    descricao: string;
    cid_codigo?: string;
    cid_descricao?: string;
    tipo: string;
    status: string;
}
export declare const HipoteseDiagnosticaSchema: import("mongoose").Schema<HipoteseDiagnostica, import("mongoose").Model<HipoteseDiagnostica, any, any, any, any, any, HipoteseDiagnostica>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    descricao?: import("mongoose").SchemaDefinitionProperty<string, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cid_codigo?: import("mongoose").SchemaDefinitionProperty<string | undefined, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cid_descricao?: import("mongoose").SchemaDefinitionProperty<string | undefined, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo?: import("mongoose").SchemaDefinitionProperty<string, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, HipoteseDiagnostica, import("mongoose").Document<unknown, {}, HipoteseDiagnostica, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<HipoteseDiagnostica & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, HipoteseDiagnostica>;
export declare class Conduta {
    plano_terapeutico?: string;
    orientacoes_paciente?: string;
}
export declare const CondutaSchema: import("mongoose").Schema<Conduta, import("mongoose").Model<Conduta, any, any, any, any, any, Conduta>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Conduta, import("mongoose").Document<unknown, {}, Conduta, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Conduta & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    plano_terapeutico?: import("mongoose").SchemaDefinitionProperty<string | undefined, Conduta, import("mongoose").Document<unknown, {}, Conduta, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conduta & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    orientacoes_paciente?: import("mongoose").SchemaDefinitionProperty<string | undefined, Conduta, import("mongoose").Document<unknown, {}, Conduta, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Conduta & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Conduta>;
export declare class ProcedimentoAtendimento {
    descricao_procedimento: string;
    codigo_procedimento?: string;
    data: DataInfo;
    observacoes?: string;
}
export declare const ProcedimentoAtendimentoSchema: import("mongoose").Schema<ProcedimentoAtendimento, import("mongoose").Model<ProcedimentoAtendimento, any, any, any, any, any, ProcedimentoAtendimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProcedimentoAtendimento, import("mongoose").Document<unknown, {}, ProcedimentoAtendimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ProcedimentoAtendimento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    descricao_procedimento?: import("mongoose").SchemaDefinitionProperty<string, ProcedimentoAtendimento, import("mongoose").Document<unknown, {}, ProcedimentoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ProcedimentoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    codigo_procedimento?: import("mongoose").SchemaDefinitionProperty<string | undefined, ProcedimentoAtendimento, import("mongoose").Document<unknown, {}, ProcedimentoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ProcedimentoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data?: import("mongoose").SchemaDefinitionProperty<DataInfo, ProcedimentoAtendimento, import("mongoose").Document<unknown, {}, ProcedimentoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ProcedimentoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacoes?: import("mongoose").SchemaDefinitionProperty<string | undefined, ProcedimentoAtendimento, import("mongoose").Document<unknown, {}, ProcedimentoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ProcedimentoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ProcedimentoAtendimento>;
export declare const VIAS_ADMINISTRACAO: readonly ["oral", "intravenosa", "intramuscular", "subcutanea", "topica", "inalatoria", "oftalmica", "otologica", "nasal", "retal", "outro"];
export declare class ItemPrescricao {
    nome_medicamento: string;
    principio_ativo?: string;
    dosagem?: string;
    via_administracao: string;
    frequencia?: string;
    duracao?: string;
    quantidade?: string;
    observacoes?: string;
}
export declare const ItemPrescricaoSchema: import("mongoose").Schema<ItemPrescricao, import("mongoose").Model<ItemPrescricao, any, any, any, any, any, ItemPrescricao>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    nome_medicamento?: import("mongoose").SchemaDefinitionProperty<string, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    principio_ativo?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dosagem?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    via_administracao?: import("mongoose").SchemaDefinitionProperty<string, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    frequencia?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duracao?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    quantidade?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    observacoes?: import("mongoose").SchemaDefinitionProperty<string | undefined, ItemPrescricao, import("mongoose").Document<unknown, {}, ItemPrescricao, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ItemPrescricao & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ItemPrescricao>;
export declare class PrescricoesAtendimento {
    tipo_receita: string;
    numero_receita?: string;
    itens: ItemPrescricao[];
}
export declare const PrescricoesAtendimentoSchema: import("mongoose").Schema<PrescricoesAtendimento, import("mongoose").Model<PrescricoesAtendimento, any, any, any, any, any, PrescricoesAtendimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PrescricoesAtendimento, import("mongoose").Document<unknown, {}, PrescricoesAtendimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<PrescricoesAtendimento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tipo_receita?: import("mongoose").SchemaDefinitionProperty<string, PrescricoesAtendimento, import("mongoose").Document<unknown, {}, PrescricoesAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PrescricoesAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    numero_receita?: import("mongoose").SchemaDefinitionProperty<string | undefined, PrescricoesAtendimento, import("mongoose").Document<unknown, {}, PrescricoesAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PrescricoesAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    itens?: import("mongoose").SchemaDefinitionProperty<ItemPrescricao[], PrescricoesAtendimento, import("mongoose").Document<unknown, {}, PrescricoesAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PrescricoesAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PrescricoesAtendimento>;
export declare class PedidoExame {
    tipo_exame: string;
    descricao_exame: string;
    codigo_exame?: string;
    justificativa_clinica?: string;
    urgencia: string;
    status: string;
    data_solicitacao: DataInfo;
    data_resultado?: DataInfo;
    resultado_resumo?: string;
    arquivo_resultado_ref?: string;
}
export declare const PedidoExameSchema: import("mongoose").Schema<PedidoExame, import("mongoose").Model<PedidoExame, any, any, any, any, any, PedidoExame>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tipo_exame?: import("mongoose").SchemaDefinitionProperty<string, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descricao_exame?: import("mongoose").SchemaDefinitionProperty<string, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    codigo_exame?: import("mongoose").SchemaDefinitionProperty<string | undefined, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    justificativa_clinica?: import("mongoose").SchemaDefinitionProperty<string | undefined, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    urgencia?: import("mongoose").SchemaDefinitionProperty<string, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_solicitacao?: import("mongoose").SchemaDefinitionProperty<DataInfo, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_resultado?: import("mongoose").SchemaDefinitionProperty<DataInfo | undefined, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    resultado_resumo?: import("mongoose").SchemaDefinitionProperty<string | undefined, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    arquivo_resultado_ref?: import("mongoose").SchemaDefinitionProperty<string | undefined, PedidoExame, import("mongoose").Document<unknown, {}, PedidoExame, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<PedidoExame & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PedidoExame>;
export declare class AtestadoAtendimento {
    tipo: string;
    descricao?: string;
    cid_codigo?: string;
    dias_afastamento?: number;
    data_emissao: DataInfo;
}
export declare const AtestadoAtendimentoSchema: import("mongoose").Schema<AtestadoAtendimento, import("mongoose").Model<AtestadoAtendimento, any, any, any, any, any, AtestadoAtendimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tipo?: import("mongoose").SchemaDefinitionProperty<string, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string | undefined, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cid_codigo?: import("mongoose").SchemaDefinitionProperty<string | undefined, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dias_afastamento?: import("mongoose").SchemaDefinitionProperty<number | undefined, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_emissao?: import("mongoose").SchemaDefinitionProperty<DataInfo, AtestadoAtendimento, import("mongoose").Document<unknown, {}, AtestadoAtendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AtestadoAtendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AtestadoAtendimento>;
export declare const TIPOS_DOCUMENTO_ANEXO: readonly ["exame", "laudo", "imagem", "receita", "atestado", "consentimento", "outro"];
export declare class DocumentoAnexado {
    tipo_documento: string;
    descricao?: string;
    nome_arquivo: string;
    caminho_armazenamento: string;
    mime_type?: string;
    tamanho_bytes?: number;
    data_upload: DataInfo;
    profissional_upload_id: Types.ObjectId;
}
export declare const DocumentoAnexadoSchema: import("mongoose").Schema<DocumentoAnexado, import("mongoose").Model<DocumentoAnexado, any, any, any, any, any, DocumentoAnexado>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    tipo_documento?: import("mongoose").SchemaDefinitionProperty<string, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    descricao?: import("mongoose").SchemaDefinitionProperty<string | undefined, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_arquivo?: import("mongoose").SchemaDefinitionProperty<string, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    caminho_armazenamento?: import("mongoose").SchemaDefinitionProperty<string, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mime_type?: import("mongoose").SchemaDefinitionProperty<string | undefined, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tamanho_bytes?: import("mongoose").SchemaDefinitionProperty<number | undefined, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_upload?: import("mongoose").SchemaDefinitionProperty<DataInfo, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_upload_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, DocumentoAnexado, import("mongoose").Document<unknown, {}, DocumentoAnexado, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DocumentoAnexado & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DocumentoAnexado>;
export declare class Atendimento {
    paciente_id: Types.ObjectId;
    profissional_id: Types.ObjectId;
    local_atendimento_id: Types.ObjectId;
    agendamento_id?: Types.ObjectId;
    data_atendimento: DataInfo;
    tipo_atendimento: TipoAtendimento;
    status: StatusAtendimento;
    nome_paciente: string;
    nome_profissional: string;
    sinais_vitais?: SinaisVitais;
    exame_fisico?: ExameFisico;
    hipoteses_diagnosticas: HipoteseDiagnostica[];
    conduta?: Conduta;
    procedimentos: ProcedimentoAtendimento[];
    prescricoes?: PrescricoesAtendimento;
    pedidos_exames: PedidoExame[];
    atestados: AtestadoAtendimento[];
    documentos_anexados: DocumentoAnexado[];
}
export declare const AtendimentoSchema: import("mongoose").Schema<Atendimento, import("mongoose").Model<Atendimento, any, any, any, any, any, Atendimento>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    paciente_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    profissional_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    local_atendimento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    agendamento_id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | undefined, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    data_atendimento?: import("mongoose").SchemaDefinitionProperty<DataInfo, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tipo_atendimento?: import("mongoose").SchemaDefinitionProperty<"primeira_consulta" | "consulta" | "retorno" | "encaixe" | "telemedicina", Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<"em_andamento" | "finalizado" | "cancelado", Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_paciente?: import("mongoose").SchemaDefinitionProperty<string, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    nome_profissional?: import("mongoose").SchemaDefinitionProperty<string, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    sinais_vitais?: import("mongoose").SchemaDefinitionProperty<SinaisVitais | undefined, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    exame_fisico?: import("mongoose").SchemaDefinitionProperty<ExameFisico | undefined, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hipoteses_diagnosticas?: import("mongoose").SchemaDefinitionProperty<HipoteseDiagnostica[], Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    conduta?: import("mongoose").SchemaDefinitionProperty<Conduta | undefined, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    procedimentos?: import("mongoose").SchemaDefinitionProperty<ProcedimentoAtendimento[], Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    prescricoes?: import("mongoose").SchemaDefinitionProperty<PrescricoesAtendimento | undefined, Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    pedidos_exames?: import("mongoose").SchemaDefinitionProperty<PedidoExame[], Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    atestados?: import("mongoose").SchemaDefinitionProperty<AtestadoAtendimento[], Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    documentos_anexados?: import("mongoose").SchemaDefinitionProperty<DocumentoAnexado[], Atendimento, import("mongoose").Document<unknown, {}, Atendimento, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Atendimento & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Atendimento>;
