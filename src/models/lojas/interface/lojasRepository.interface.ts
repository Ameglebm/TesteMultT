import { UpdateLojaDTO, ResponseLojaDTO } from '../dtos/lojasDTO';

export interface ILojaService {
  findAll(): Promise<ResponseLojaDTO[]>;
  findById(id: string): Promise<ResponseLojaDTO>;
  update(id: string, data: UpdateLojaDTO): Promise<ResponseLojaDTO>;
  remove(id: string): Promise<{ message: string }>;
}
