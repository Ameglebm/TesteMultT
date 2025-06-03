import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '../../../lib/prisma';
import { MetodoPagamento, TipoMovimentacao } from '@prisma/client';

@Injectable()
export class FinanceiroRepository {
  // Método para criar uma movimentação financeira
  async criarMovimentacao(
    lojaId: string,
    tipo: TipoMovimentacao,
    metodoPagamento: MetodoPagamento,
    valor: number,
    descricao: string
  ) {
    return prisma.movimentacaoFinanceira.create({
      data: {
        lojaId,
        tipo,
        metodoPagamento,
        valor,
        descricao,
      },
    });
  }

  // Método para listar movimentações financeiras por loja
  async listarPorLoja(lojaId: string, inicio?: Date, fim?: Date) {
    return prisma.movimentacaoFinanceira.findMany({
      where: {
        lojaId,
        ...(inicio && { criadoEm: { gte: inicio } }), // Filtro de data de início
        ...(fim && { criadoEm: { lte: fim } }), // Filtro de data de fim
      },
      orderBy: { criadoEm: 'desc' }, // Ordenação pela data de criação
    });
  }

  // Método para calcular relatório financeiro
async calcularRelatorio(
  lojaId: string,
  inicio: Date,
  fim: Date
): Promise<{
  totalEntradas: number;
  totalSaidas: number;
  saldo: number;
  totalPorMetodo: Record<MetodoPagamento, number>;
}> {
  // 🔍 Função para verificar se a data é válida
  function isValidDate(date: any): date is Date {
    return date instanceof Date && !isNaN(date.getTime());
  }

  // 🛡️ Validação das datas recebidas
  const dataInicio = new Date(inicio);
  const dataFim = new Date(fim);

  if (!isValidDate(dataInicio) || !isValidDate(dataFim)) {
    throw new Error('Datas inválidas para o relatório financeiro.');
  }

  // 📦 Buscar movimentações dentro do intervalo
  const movimentacoes = await prisma.movimentacaoFinanceira.findMany({
    where: {
      lojaId,
      criadoEm: {
        gte: dataInicio,
        lte: dataFim,
      },
    },
  });

  // 📊 Cálculos dos totais
  const totalEntradas = movimentacoes
    .filter((m) => m.tipo === TipoMovimentacao.ENTRADA)
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalSaidas = movimentacoes
    .filter((m) => m.tipo === TipoMovimentacao.SAIDA)
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saldo = totalEntradas - totalSaidas;

  // 📋 Total por método de pagamento
  const totalPorMetodo: Record<MetodoPagamento, number> = {} as Record<
    MetodoPagamento,
    number
  >;

  for (const metodo of Object.values(MetodoPagamento)) {
    totalPorMetodo[metodo] = movimentacoes
      .filter((m) => m.metodoPagamento === metodo)
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  return {
    totalEntradas,
    totalSaidas,
    saldo,
    totalPorMetodo,
  };
}


  // Método para remover uma movimentação financeira
  async removerMovimentacao(id: string, lojaId: string): Promise<void> {
    const movimentacao = await prisma.movimentacaoFinanceira.findFirst({
      where: { id, lojaId },
    });

    if (!movimentacao) {
      throw new NotFoundException('Movimentação não encontrada.');
    }

    await prisma.movimentacaoFinanceira.delete({
      where: { id },
    });
  }

  async editarMovimentacao(id: string, lojaId: string, metodoPagamento: MetodoPagamento, valor: number, descricao: string) {
    const movimentacao = await prisma.movimentacaoFinanceira.findFirst({
      where: { id, lojaId },
    });

    if (!movimentacao) {
      throw new NotFoundException('Movimentação não encontrada.');
    }

    return prisma.movimentacaoFinanceira.update({
      where: { id },
      data: {
        metodoPagamento,
        valor,
        descricao,
      },
    });

  }
}
