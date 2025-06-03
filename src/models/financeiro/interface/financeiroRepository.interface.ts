import { MetodoPagamento } from '@prisma/client';
import { RelatorioFinanceiroDTO, ResponseMovimentacaoFinanceiraDTO } from '../dtos/financeiroDTO';

export const IFinanceiroRepository = 'IFinanceiroRepository';

export interface IFinanceiroRepository {
  criarMovimentacao(
    lojaId: string,
    tipo: 'ENTRADA' | 'SAIDA',
    metodoPagamento: MetodoPagamento,
    valor: number,
    descricao: string
  ): Promise<{
    id: string;
    lojaId: string;
    tipo: 'ENTRADA' | 'SAIDA';
    metodoPagamento: MetodoPagamento;
    valor: number;
    descricao: string;
    criadoEm: Date;
  }>;

  calcularRelatorio(lojaId: string, inicio: Date, fim: Date): Promise<RelatorioFinanceiroDTO>;

  listarPorLoja(lojaId: string, inicio?: Date, fim?: Date): Promise<ResponseMovimentacaoFinanceiraDTO[]>;

  removerMovimentacao(id: string, lojaId: string): Promise<void>;

  editarMovimentacao(
    id: string,
    lojaId: string,
    metodoPagamento: MetodoPagamento,
    valor: number,
    descricao: string
  ): Promise<ResponseMovimentacaoFinanceiraDTO>;
}
