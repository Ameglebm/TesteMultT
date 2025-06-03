import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from '../service/clientes.Service';
import { CreateClienteDTO, UpdateClienteDTO, ResponseClienteDTO } from '../dtos/clientesDTO';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post(':lojaId')
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async create(
    @Param('lojaId') lojaId: string,
    @Body() createClienteDTO: CreateClienteDTO,
  ): Promise<ResponseClienteDTO> {
    return this.clienteService.create(createClienteDTO, lojaId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes' })
  @ApiResponse({ status: 404, description: 'Nenhum cliente encontrado' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar clientes' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findAll(): Promise<ResponseClienteDTO[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado' })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findById(@Param('id') id: string): Promise<ResponseClienteDTO> {
    return this.clienteService.findById(id);
  }

  @Get('loja/:lojaId')
  @ApiOperation({ summary: 'Listar todos os clientes de uma loja' })
  @ApiResponse({ status: 200, description: 'Lista de clientes da loja' })
  @ApiResponse({ status: 404, description: 'Nenhum cliente encontrado' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar clientes' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findAllByLoja(@Param('lojaId') lojaId: string): Promise<ResponseClienteDTO[]> {
    return this.clienteService.findAllByLoja(lojaId);
}


  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de um cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado' })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async update(
    @Param('id') id: string,
    @Body() updateClienteDTO: UpdateClienteDTO,
  ): Promise<ResponseClienteDTO> {
    return this.clienteService.update(id, updateClienteDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cliente por ID' })
  @ApiResponse({ status: 204, description: 'Cliente removido com sucesso' })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.clienteService.remove(id);
  }
}
