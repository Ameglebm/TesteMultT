import { Injectable } from '@nestjs/common';
import { prisma } from '../../../lib/prisma'; 
import { IClienteRepository } from '../interface/clientesRepository.interface';
import { CreateClienteDTO, UpdateClienteDTO, ResponseClienteDTO } from '../dtos/clientesDTO';

@Injectable()
export class ClienteRepository implements IClienteRepository {


  async create(data: CreateClienteDTO, lojaId: string): Promise<ResponseClienteDTO> {
    const cliente = await prisma.cliente.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        cpfCnpj: data.cpfCnpj,
        endereco: data.endereco,
        lojaId: lojaId,
      },
    });
    return new ResponseClienteDTO(cliente);
  }

  async findByLojaId(lojaId: string): Promise<ResponseClienteDTO[]> {
    const clientes = await prisma.cliente.findMany({
      where: { lojaId },
      orderBy: { nome: 'asc' },
    });
    return clientes.map(cliente => new ResponseClienteDTO(cliente));
  }

  async findByCpfCnpj(cpfCnpj: string): Promise<ResponseClienteDTO | null> {
    const cliente = await prisma.cliente.findUnique({
      where: { cpfCnpj },
    });
    return cliente ? new ResponseClienteDTO(cliente) : null;
  }

  async findAll(): Promise<ResponseClienteDTO[]> {
    const clientes = await prisma.cliente.findMany();
    return clientes.map(cliente => new ResponseClienteDTO(cliente));
  }

  async findById(id: string): Promise<ResponseClienteDTO | null> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });
    return cliente ? new ResponseClienteDTO(cliente) : null;
  }

  async update(id: string, data: UpdateClienteDTO): Promise<ResponseClienteDTO> {
    const cliente = await prisma.cliente.update({
      where: { id },
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        cpfCnpj: data.cpfCnpj,
        endereco: data.endereco,
      },
    });
    return new ResponseClienteDTO(cliente);
  }

  async remove(id: string): Promise<void> {
    await prisma.cliente.delete({
      where: { id },
    });
  }
}
