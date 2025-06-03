import { CriarOrcamentoDTO } from '../dtos/orcamentosDTO';
import { ResponseOrcamentoDTO } from '../dtos/orcamentosDTO';

export interface IOrcamentosService {
  criarOrcamento(dados: CriarOrcamentoDTO): Promise<ResponseOrcamentoDTO>;
  listarOrcamentos(lojaId: string): Promise<ResponseOrcamentoDTO[]>;
  buscarOrcamentoPorId(id: string): Promise<ResponseOrcamentoDTO>;
  atualizarOrcamento(
    id: string,
    dados: Partial<CriarOrcamentoDTO>,
  ): Promise<ResponseOrcamentoDTO>;
  deletarOrcamento(id: string): Promise<void>;
}
