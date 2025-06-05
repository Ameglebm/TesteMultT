import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { CreateProdutoDTO } from '../dtos/produtosDTO';
import { prisma } from '../../../lib/prisma';

@Injectable()
export class ProdutoRepository {
  async create(data: CreateProdutoDTO): Promise<Produto> {
    return prisma.produto.create({
      data: {
        nome: data.nome,
        precoCusto: data.precoCusto,
        precoVenda: data.precoVenda,
        estoque: data.quantidadeInicial,
        lojaId: data.lojaId,
      },
    });
  }

  async createMovimentacao(data: {
    produtoId: string;
    lojaId: string;
    quantidade: number;
    motivo: string;
  }) {
    return prisma.movimentacaoEstoque.create({
      data,
    });
  }

  async findAll(): Promise<Produto[]> {
    return prisma.produto.findMany();
  }

  async findById(id: string): Promise<Produto | null> {
    return prisma.produto.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<Produto>): Promise<Produto> {
    return prisma.produto.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }

  async gerarRelatorioEstoque(lojaId: string) {
    const produtos = await prisma.produto.findMany({ where: { lojaId } });

    const totalProdutos = produtos.length;
    const quantidadeTotal = produtos.reduce((soma, p) => soma + p.estoque, 0);
    const valorTotal = produtos.reduce(
      (soma, p) => soma + p.estoque * p.precoCusto,
      0,
    );

    return {
      produtos,
      totalProdutos,
      quantidadeTotal,
      valorTotal,
    };
  }
}
