import {
  CreateClienteDTO,
  UpdateClienteDTO,
  ResponseClienteDTO,
} from '../dtos/clientesDTO';

export interface IClienteRepository {
  findAll(): Promise<ResponseClienteDTO[]>; // Retorna todos os clientes
  findById(id: string): Promise<ResponseClienteDTO | null>; // Retorna um cliente específico
  update(id: string, data: UpdateClienteDTO): Promise<ResponseClienteDTO>; // Atualiza um cliente
  remove(id: string): Promise<void>; // Remove um cliente
  create(data: CreateClienteDTO, lojaId: string): Promise<ResponseClienteDTO>; // Cria um novo cliente
  findByLojaId(lojaId: string): Promise<ResponseClienteDTO[]>; // Retorna clientes por loja
  findByCpfCnpj(cpfCnpj: string): Promise<ResponseClienteDTO | null>; // Retorna cliente por CPF/CNPJ
}
