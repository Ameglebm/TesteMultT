import { Produto } from '@prisma/client';
import { CreateProdutoDTO } from '../dtos/produtosDTO';

export abstract class IProdutoService {
  abstract criarProduto(data: CreateProdutoDTO): Promise<Produto>;
  abstract listarProdutos(): Promise<Produto[]>;
  abstract buscarProdutoPorId(id: string): Promise<Produto>;
  abstract atualizarProduto(
    id: string,
    data: Partial<Produto>,
  ): Promise<Produto>;
  abstract removerProduto(id: string): Promise<void>;
  abstract gerarRelatorioEstoque(lojaId: string): Promise<{
    totalProdutos: number;
    quantidadeTotal: number;
    valorTotal: number;
  }>;
}
