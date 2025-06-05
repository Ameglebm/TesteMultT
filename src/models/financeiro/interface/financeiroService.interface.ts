import { MetodoPagamento } from 'generated/prisma';
import { CriarSaidaFinanceiraDTO } from '../dtos/financeiroDTO';
import {
  ResponseMovimentacaoFinanceiraDTO,
  RelatorioFinanceiroDTO,
} from '../dtos/financeiroDTO';

export const IFinanceiroService = 'IFinanceiroService';

export interface IFinanceiroService {
  registrarSaidaManual(
    lojaId: string,
    dto: CriarSaidaFinanceiraDTO,
  ): Promise<ResponseMovimentacaoFinanceiraDTO>;

  registrarEntradaPorOrcamento(
    lojaId: string,
    valor: number,
    metodoPagamento: string,
    descricao: string,
  ): Promise<void>;

  gerarRelatorioFinanceiro(
    lojaId: string,
    dataInicio: Date,
    dataFim: Date,
  ): Promise<RelatorioFinanceiroDTO>;

  listarTodasMovimentacoes(
    lojaId: string,
    dataInicio?: Date,
    dataFim?: Date,
  ): Promise<ResponseMovimentacaoFinanceiraDTO[]>;

  removerMovimentacao(id: string, lojaId: string): Promise<void>;

  editarMovimentacao(
    id: string,
    lojaId: string,
    metodoPagamento: MetodoPagamento,
    valor: number,
    descricao: string,
  ): Promise<ResponseMovimentacaoFinanceiraDTO>;
}
