export declare class DataInfo {
    data_completa: Date;
    dia: number;
    mes: number;
    ano: number;
    dia_semana: number;
    semana_ano: number;
    trimestre: number;
}
export declare const DataInfoSchema: import("mongoose").Schema<DataInfo, import("mongoose").Model<DataInfo, any, any, any, any, any, DataInfo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    data_completa?: import("mongoose").SchemaDefinitionProperty<Date, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dia?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mes?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    ano?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    dia_semana?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    semana_ano?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trimestre?: import("mongoose").SchemaDefinitionProperty<number, DataInfo, import("mongoose").Document<unknown, {}, DataInfo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<DataInfo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DataInfo>;
