import { Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { ProdutoRepository } from '../repository/produtosRepository';
import { CreateProdutoDTO } from '../dtos/produtosDTO';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async criarProduto(data: CreateProdutoDTO): Promise<Produto> {
    return this.produtoRepository.create(data);
  }

  async listarProdutos(): Promise<Produto[]> {
    return this.produtoRepository.findAll();
  }

  async buscarProdutoPorId(id: string): Promise<Produto> {
    const produto = await this.produtoRepository.findById(id);
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async atualizarProduto(id: string, data: Partial<Produto>): Promise<Produto> {
    return this.produtoRepository.update(id, data);
  }

  async removerProduto(id: string): Promise<void> {
    await this.produtoRepository.delete(id);
  }

  async gerarRelatorioEstoque(lojaId: string) {
    return this.produtoRepository.gerarRelatorioEstoque(lojaId);
  }
}
