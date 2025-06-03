import { Injectable, NotFoundException } from '@nestjs/common';
import { Loja } from '@prisma/client';
import { LojaRepository } from '../repository/lojasRepository';
import { UpdateLojaDTO } from '../dtos/lojasDTO';

@Injectable()
export class LojasService {
  constructor(private readonly lojaRepository: LojaRepository) {}

  async listarLojas(): Promise<Loja[]> {
    return this.lojaRepository.findAll();
  }

  async buscarLojaPorId(id: string): Promise<Loja> {
    const loja = await this.lojaRepository.findById(id);
    if (!loja) throw new NotFoundException('Loja não encontrada');
    return loja;
  }

  async atualizarLoja(id: string, data: UpdateLojaDTO): Promise<Loja> {
    return this.lojaRepository.update(id, data);
  }

  async removerLoja(id: string): Promise<void> {
    return this.lojaRepository.remove(id);
  }
}
