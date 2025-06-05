import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import {
  CriarSaidaFinanceiraDTO,
  RelatorioFinanceiroDTO,
  ResponseMovimentacaoFinanceiraDTO,
} from '../dtos/financeiroDTO';
import { TipoMovimentacao } from '@prisma/client';
import { IFinanceiroRepository } from '../interface/financeiroRepository.interface';
import { MetodoPagamento } from '@prisma/client';

@Injectable()
export class FinanceiroService {
  constructor(
    @Inject(IFinanceiroRepository)
    private readonly financeiroRepository: IFinanceiroRepository,
  ) {}

  async registrarSaidaManual(
    lojaId: string,
    dto: CriarSaidaFinanceiraDTO,
  ): Promise<ResponseMovimentacaoFinanceiraDTO> {
    const tipo = TipoMovimentacao.SAIDA;

    if (dto.metodoPagamento === undefined) {
      throw new BadRequestException('Método de pagamento não pode ser vazio.');
    }

    const movimentacao = await this.financeiroRepository.criarMovimentacao(
      lojaId,
      tipo,
      dto.metodoPagamento,
      dto.valor,
      dto.descricao,
    );

    return {
      id: movimentacao.id,
      lojaId: movimentacao.lojaId,
      tipo: movimentacao.tipo,
      metodoPagamento: movimentacao.metodoPagamento,
      valor: movimentacao.valor,
      descricao: movimentacao.descricao,
      criadoEm: movimentacao.criadoEm,
    };
  }

  async gerarRelatorioFinanceiro(
    lojaId: string,
    dataInicio: Date,
    dataFim: Date,
  ): Promise<RelatorioFinanceiroDTO> {
    if (dataInicio > dataFim) {
      throw new BadRequestException(
        'Data de início não pode ser maior que a data de fim.',
      );
    }

    return this.financeiroRepository.calcularRelatorio(
      lojaId,
      dataInicio,
      dataFim,
    );
  }

  async listarTodasMovimentacoes(
    lojaId: string,
    dataInicio?: Date,
    dataFim?: Date,
  ): Promise<ResponseMovimentacaoFinanceiraDTO[]> {
    const movimentacoes = await this.financeiroRepository.listarPorLoja(
      lojaId,
      dataInicio,
      dataFim,
    );

    return movimentacoes.map((m) => ({
      id: m.id,
      lojaId: m.lojaId,
      tipo: m.tipo,
      metodoPagamento: m.metodoPagamento,
      valor: m.valor,
      descricao: m.descricao,
      criadoEm: m.criadoEm,
    }));
  }

  async removerMovimentacao(id: string, lojaId: string): Promise<void> {
    return this.financeiroRepository.removerMovimentacao(id, lojaId);
  }

  async editarMovimentacao(
    id: string,
    lojaId: string,
    metodoPagamento: MetodoPagamento,
    valor: number,
    descricao: string,
  ): Promise<ResponseMovimentacaoFinanceiraDTO> {
    const movimentacao = await this.financeiroRepository.editarMovimentacao(
      id,
      lojaId,
      metodoPagamento,
      valor,
      descricao,
    );

    return {
      id: movimentacao.id,
      lojaId: movimentacao.lojaId,
      tipo: movimentacao.tipo,
      metodoPagamento: movimentacao.metodoPagamento,
      valor: movimentacao.valor,
      descricao: movimentacao.descricao,
      criadoEm: movimentacao.criadoEm,
    };
  }
}
