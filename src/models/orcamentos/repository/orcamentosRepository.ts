import { CriarOrcamentoDTO, ResponseOrcamentoDTO } from '../dtos/orcamentosDTO';
import { IOrcamentosRepository } from '../interface/orcamentosRepository.interface';
import { prisma } from '../../../lib/prisma';
import { StatusOrcamento } from '@prisma/client';

export class OrcamentosRepository implements IOrcamentosRepository {
  async create(
    data: CriarOrcamentoDTO,
    lojaId: string,
  ): Promise<ResponseOrcamentoDTO> {
    const itens = data.itens ?? [];
    const servicos = data.servicos ?? [];

    const totalProdutos = itens.reduce(
      (sum, item) => sum + item.quantidade * item.precoUnitario,
      0,
    );
    const totalServicos = servicos.reduce(
      (sum, servico) => sum + servico.valor,
      0,
    );
    const totalSemJuros = totalProdutos + totalServicos;

    const total = data.taxaJuros
      ? totalSemJuros + (totalSemJuros * data.taxaJuros) / 100
      : totalSemJuros;

    const orcamento = await prisma.orcamento.create({
      data: {
        clienteId: data.clienteId,
        lojaId,
        descricao: data.descricao,
        metodoPagamento: data.metodoPagamento,
        numeroParcelas: data.numeroParcelas,
        taxaJuros: data.taxaJuros,
        total,
        ...(itens.length > 0 && {
          itens: {
            create: itens.map((item) => ({
              produtoId: item.produtoId,
              quantidade: item.quantidade,
              precoUnitario: item.precoUnitario,
            })),
          },
        }),
        ...(servicos.length > 0 && {
          servicos: {
            create: servicos.map((servico) => ({
              descricao: servico.descricao,
              valor: servico.valor,
            })),
          },
        }),
      },
      include: {
        itens: true,
        servicos: true,
      },
    });

    return {
      id: orcamento.id,
      clienteId: orcamento.clienteId!,
      lojaId: orcamento.lojaId,
      descricao: orcamento.descricao,
      metodoPagamento: orcamento.metodoPagamento!,
      numeroParcelas: orcamento.numeroParcelas || undefined,
      taxaJuros: orcamento.taxaJuros || undefined,
      total: orcamento.total,
      status: orcamento.status,
      itens: orcamento.itens.map((i) => ({
        produtoId: i.produtoId,
        quantidade: i.quantidade,
        precoUnitario: i.precoUnitario,
      })),
      servicos: orcamento.servicos.map((s) => ({
        descricao: s.descricao,
        valor: s.valor,
      })),
      criadoEm: orcamento.criadoEm,
    };
  }

  async findAllByLoja(lojaId: string): Promise<ResponseOrcamentoDTO[]> {
    const orcamentos = await prisma.orcamento.findMany({
      where: { lojaId },
      include: { itens: true, servicos: true },
    });

    return orcamentos.map((orcamento) => ({
      id: orcamento.id,
      clienteId: orcamento.clienteId!,
      lojaId: orcamento.lojaId,
      descricao: orcamento.descricao,
      metodoPagamento: orcamento.metodoPagamento!,
      numeroParcelas: orcamento.numeroParcelas || undefined,
      taxaJuros: orcamento.taxaJuros || undefined,
      total: orcamento.total,
      status: orcamento.status,
      itens: orcamento.itens.map((i) => ({
        produtoId: i.produtoId,
        quantidade: i.quantidade,
        precoUnitario: i.precoUnitario,
      })),
      servicos: orcamento.servicos.map((s) => ({
        descricao: s.descricao,
        valor: s.valor,
      })),
      criadoEm: orcamento.criadoEm,
    }));
  }

  async findById(id: string): Promise<ResponseOrcamentoDTO | null> {
    const orcamento = await prisma.orcamento.findUnique({
      where: { id },
      include: { itens: true, servicos: true },
    });

    if (!orcamento) return null;

    return {
      id: orcamento.id,
      clienteId: orcamento.clienteId!,
      lojaId: orcamento.lojaId,
      descricao: orcamento.descricao,
      metodoPagamento: orcamento.metodoPagamento!,
      numeroParcelas: orcamento.numeroParcelas || undefined,
      taxaJuros: orcamento.taxaJuros || undefined,
      total: orcamento.total,
      status: orcamento.status,
      itens: orcamento.itens.map((i) => ({
        produtoId: i.produtoId,
        quantidade: i.quantidade,
        precoUnitario: i.precoUnitario,
      })),
      servicos: orcamento.servicos.map((s) => ({
        descricao: s.descricao,
        valor: s.valor,
      })),
      criadoEm: orcamento.criadoEm,
    };
  }

  async updateStatus(id: string, status: string): Promise<void> {
    await prisma.orcamento.update({
      where: { id },
      data: { status: status as StatusOrcamento },
    });
  }

  async remove(id: string): Promise<void> {
    await prisma.itemOrcamento.deleteMany({ where: { orcamentoId: id } });
    await prisma.servico.deleteMany({ where: { orcamentoId: id } });
    await prisma.orcamento.delete({ where: { id } });
  }
}
