import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from '../service/clientes.Service';
import { CreateClienteDTO, UpdateClienteDTO, ResponseClienteDTO } from '../dtos/clientesDTO';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post(':lojaId')
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso', content: {
    'application/json': {
      schema: {
        example: 
        {
          id: '12345',
          nome: 'João Silva',
          email: 'joao@gmail.com',
          telefone: '(11) 98765-4321',
          endereco: 'Rua Exemplo, 123, São Paulo, SP',
          cpfCnpj: '123.456.789-00',
          lojaId: '6789-234gh-4567-8901-234567890123',
        }
  }}}})
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
  @ApiResponse({ status: 200, description: 'Lista de clientes', content: {
    'application/json': {
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID do cliente' },
            nome: { type: 'string', description: 'Nome do cliente' },
            email: { type: 'string', description: 'Email do cliente' },
            telefone: { type: 'string', description: 'Telefone do cliente' },
            endereco: { type: 'string', description: 'Endereço do cliente' },
            cpfCnpj: { type: 'string', description: 'CPF ou CNPJ do cliente' },
            lojaId: { type: 'string', description: 'ID da loja associada' },
          },
        },
      },
    },
  }})
  @ApiResponse({ status: 404, description: 'Nenhum cliente encontrado' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar clientes' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findAll(): Promise<ResponseClienteDTO[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado', content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'ID do cliente' },
          nome: { type: 'string', description: 'Nome do cliente' },
          email: { type: 'string', description: 'Email do cliente' },
          telefone: { type: 'string', description: 'Telefone do cliente' },
          endereco: { type: 'string', description: 'Endereço do cliente' },
          cpfCnpj: { type: 'string', description: 'CPF ou CNPJ do cliente' },
          lojaId: { type: 'string', description: 'ID da loja associada' },
        },
      },
    },
  }})
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findById(@Param('id') id: string): Promise<ResponseClienteDTO> {
    return this.clienteService.findById(id);
  }

  @Get('loja/:lojaId')
  @ApiOperation({ summary: 'Listar todos os clientes de uma loja' })
  @ApiResponse({ status: 200, description: 'Lista de clientes da loja', content: {
    'application/json': {
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID do cliente' },
            nome: { type: 'string', description: 'Nome do cliente' },
            email: { type: 'string', description: 'Email do cliente' },
            telefone: { type: 'string', description: 'Telefone do cliente' },
            endereco: { type: 'string', description: 'Endereço do cliente' },
            cpfCnpj: { type: 'string', description: 'CPF ou CNPJ do cliente' },
            lojaId: { type: 'string', description: 'ID da loja associada' },
          },
        },
      },
    },
  }})
  @ApiResponse({ status: 404, description: 'Nenhum cliente encontrado' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar clientes' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async findAllByLoja(@Param('lojaId') lojaId: string): Promise<ResponseClienteDTO[]> {
    return this.clienteService.findAllByLoja(lojaId);
}


  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de um cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado', content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'ID do cliente' },
          nome: { type: 'string', description: 'Nome do cliente' },
          email: { type: 'string', description: 'Email do cliente' },
          telefone: { type: 'string', description: 'Telefone do cliente' },
          endereco: { type: 'string', description: 'Endereço do cliente' },
          cpfCnpj: { type: 'string', description: 'CPF ou CNPJ do cliente' },
          lojaId: { type: 'string', description: 'ID da loja associada' },
        },
      },
    },
  }})
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
  @ApiResponse({ status: 204, description: 'Cliente removido com sucesso', content: {
    'application/json': {
      schema: {
        example: 'Cliente removido com sucesso',
        
      },
    },
  }})
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.clienteService.remove(id);
  }
}
