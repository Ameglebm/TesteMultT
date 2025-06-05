import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CriarOrcamentoDTO } from '../dtos/orcamentosDTO';
import { IOrcamentosRepository } from '../interface/orcamentosRepository.interface';
import { ResponseOrcamentoDTO } from '../dtos/orcamentosDTO';

@Injectable()
export class OrcamentosService {
  constructor(
    @Inject(IOrcamentosRepository)
    private readonly orcamentosRepository: IOrcamentosRepository,
  ) {}

  async criarOrcamento(
    data: CriarOrcamentoDTO,
    lojaId: string,
  ): Promise<ResponseOrcamentoDTO> {
    const semProdutos = !data.itens || data.itens.length === 0;
    const semServicos = !data.servicos || data.servicos.length === 0;

    if (semProdutos && semServicos) {
      throw new BadRequestException(
        'É necessário incluir ao menos um produto ou um serviço no orçamento.',
      );
    }

    return this.orcamentosRepository.create(data, lojaId);
  }

  async listarOrcamentosPorLoja(
    lojaId: string,
  ): Promise<ResponseOrcamentoDTO[]> {
    return this.orcamentosRepository.findAllByLoja(lojaId);
  }

  async buscarOrcamentoPorId(id: string): Promise<ResponseOrcamentoDTO> {
    const orcamento = await this.orcamentosRepository.findById(id);
    if (!orcamento) throw new NotFoundException('Orçamento não encontrado');
    return orcamento;
  }

  async atualizarOrcamento(
    id: string,
    data: Partial<CriarOrcamentoDTO>,
  ): Promise<ResponseOrcamentoDTO> {
    if (data.status) {
      await this.orcamentosRepository.updateStatus(id, data.status);
    }
    return this.buscarOrcamentoPorId(id);
  }

  async deletarOrcamento(id: string): Promise<void> {
    return this.orcamentosRepository.remove(id);
  }
}
