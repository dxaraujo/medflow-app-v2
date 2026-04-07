import { LancamentosReceitaService } from './lancamentos-receita.service';
import { CreateLancamentoReceitaDto } from './dto/create-lancamento-receita.dto';
import { UpdateLancamentoReceitaDto } from './dto/update-lancamento-receita.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class LancamentosReceitaController {
    private readonly lancamentosReceitaService;
    constructor(lancamentosReceitaService: LancamentosReceitaService);
    create(dto: CreateLancamentoReceitaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/lancamento-receita.schema").LancamentoReceita, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/lancamento-receita.schema").LancamentoReceita & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(pagination: PaginationDto, categoria?: string, status_pagamento?: string, data_inicio?: string, data_fim?: string): Promise<import("../../common/dto/pagination.dto").PaginatedResult<import("mongoose").Document<unknown, {}, import("./schemas/lancamento-receita.schema").LancamentoReceita, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/lancamento-receita.schema").LancamentoReceita & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/lancamento-receita.schema").LancamentoReceita, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/lancamento-receita.schema").LancamentoReceita & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateLancamentoReceitaDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/lancamento-receita.schema").LancamentoReceita, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/lancamento-receita.schema").LancamentoReceita & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
