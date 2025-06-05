import { CriarOrcamentoDTO, ResponseOrcamentoDTO } from '../dtos/orcamentosDTO';
export const IOrcamentosRepository = Symbol('IOrcamentosRepository');
export interface IOrcamentosRepository {
  create(
    data: CriarOrcamentoDTO,
    lojaId: string,
  ): Promise<ResponseOrcamentoDTO>;
  findAllByLoja(lojaId: string): Promise<ResponseOrcamentoDTO[]>;
  findById(id: string): Promise<ResponseOrcamentoDTO | null>;
  updateStatus(id: string, status: string): Promise<void>;
  remove(id: string): Promise<void>;
}
