import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '../../../lib/prisma';
import { ILojaRepository } from '../interface/lojasService.interface';
import { Loja } from '@prisma/client';
import { UpdateLojaDTO } from '../dtos/lojasDTO';

@Injectable()
export class LojaRepository implements ILojaRepository {
  async findAll(): Promise<Loja[]> {
    return prisma.loja.findMany({
      orderBy: { criadoEm: 'desc' },
    });
  }

  async findById(id: string): Promise<Loja | null> {
    return prisma.loja.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateLojaDTO): Promise<Loja> {
    const loja = await prisma.loja.findUnique({ where: { id } });
    if (!loja) throw new NotFoundException('Loja não encontrada');

    return prisma.loja.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<void> {
    const loja = await prisma.loja.findUnique({ where: { id } });
    if (!loja) throw new NotFoundException('Loja não encontrada');

    await prisma.usuario.updateMany({
      where: { lojaId: id },
      data: {
        ativo: false,
        lojaId: null,
      },
    });

    await prisma.loja.delete({
      where: { id },
    });
  }
}
