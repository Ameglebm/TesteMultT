import { Loja } from '@prisma/client';
import { UpdateLojaDTO } from '../dtos/lojasDTO';

export interface ILojaRepository {
  findAll(): Promise<Loja[]>;
  findById(id: string): Promise<Loja | null>;
  update(id: string, data: UpdateLojaDTO): Promise<Loja>;
  remove(id: string): Promise<void>;
}
