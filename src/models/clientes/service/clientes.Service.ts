import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../repository/clientesRepository';
import { CreateClienteDTO, UpdateClienteDTO, ResponseClienteDTO } from '../dtos/clientesDTO';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async create(data: CreateClienteDTO, lojaId: string): Promise<ResponseClienteDTO> {
    return this.clienteRepository.create(data, lojaId);
  }

  async findAll(): Promise<ResponseClienteDTO[]> {
    return this.clienteRepository.findAll();
  }

  async findById(id: string): Promise<ResponseClienteDTO> {
    const cliente = await this.clienteRepository.findById(id);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return cliente;
  }

  async findAllByLoja(lojaId: string): Promise<ResponseClienteDTO[]> {
    const clientes = await this.clienteRepository.findByLojaId(lojaId);
    return clientes.map(cliente => new ResponseClienteDTO(cliente));
}


  async update(id: string, data: UpdateClienteDTO): Promise<ResponseClienteDTO> {
    return this.clienteRepository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.clienteRepository.remove(id);
  }
}
