import { Model } from 'mongoose';
import { LancamentoReceitaDocument } from './schemas/lancamento-receita.schema';
import { CreateLancamentoReceitaDto } from './dto/create-lancamento-receita.dto';
import { UpdateLancamentoReceitaDto } from './dto/update-lancamento-receita.dto';
import { PaginationDto, PaginatedResult } from '../../common/dto/pagination.dto';
export declare class LancamentosReceitaService {
    private readonly lancamentoModel;
    constructor(lancamentoModel: Model<LancamentoReceitaDocument>);
    create(dto: CreateLancamentoReceitaDto): Promise<LancamentoReceitaDocument>;
    findAll(pagination: PaginationDto, filters?: {
        categoria?: string;
        status_pagamento?: string;
        data_inicio?: string;
        data_fim?: string;
    }): Promise<PaginatedResult<LancamentoReceitaDocument>>;
    findById(id: string): Promise<LancamentoReceitaDocument>;
    update(id: string, dto: UpdateLancamentoReceitaDto): Promise<LancamentoReceitaDocument>;
}
