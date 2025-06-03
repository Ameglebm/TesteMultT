import { CreateClienteDTO, UpdateClienteDTO } from '../dtos/clientesDTO';
import { ResponseClienteDTO } from '../dtos/clientesDTO';
export interface IClienteService {
  findAll(): Promise<ResponseClienteDTO[]>; // Retorno de todos os clientes
  findById(id: string): Promise<ResponseClienteDTO | null>; // Retorna cliente por ID
  update(id: string, data: UpdateClienteDTO): Promise<ResponseClienteDTO>; // Atualiza cliente
  remove(id: string): Promise<void>; // Remove um cliente
  create(createClienteDTO: CreateClienteDTO, lojaId: string): Promise<ResponseClienteDTO>;
  findByLojaId(lojaId: string): Promise<ResponseClienteDTO[]>; // Retorna clientes por loja
  findByCpfCnpj(cpfCnpj: string): Promise<ResponseClienteDTO | null>; // Retorna cliente por CPF/CNPJ
}
