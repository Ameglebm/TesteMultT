import { Produto } from '@prisma/client';
import { CreateProdutoDTO } from '../dtos/produtosDTO';

export abstract class IProdutoRepository {
  abstract create(data: CreateProdutoDTO): Promise<Produto>;
  abstract findAll(): Promise<Produto[]>;
  abstract findById(id: string): Promise<Produto | null>;
  abstract update(id: string, data: Partial<Produto>): Promise<Produto>;
  abstract delete(id: string): Promise<void>;
  abstract gerarRelatorioEstoque(lojaId: string): Promise<{
    totalProdutos: number;
    quantidadeTotal: number;
    valorTotal: number;
  }>;
}
