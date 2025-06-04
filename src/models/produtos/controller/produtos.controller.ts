import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProdutoService } from '../service/produtos.Service';
import { AtualizarProdutoDTO, CreateProdutoDTO } from '../dtos/produtosDTO';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
    content: {
      'application/json': {
        schema: {
          example: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            nome: 'Produto Exemplo',
            quantidadeInicial: 100,
            precoCusto: 50.0,
            precoVenda: 75.0,
            lojaId: '123e4567-e89b-12d3-a456-426614174000',
            motivo: 'Produto de exemplo para teste',
          },
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async criar(@Body() dto: CreateProdutoDTO) {
    return this.produtoService.criarProduto(dto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos de todas as lojas',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', description: 'ID do produto' },
              nome: { type: 'string', description: 'Nome do produto' },
              quantidadeInicial: {
                type: 'number',
                description: 'Quantidade inicial do produto',
              },
              precoCusto: {
                type: 'number',
                description: 'Preço de custo do produto',
              },
              precoVenda: {
                type: 'number',
                description: 'Preço de venda do produto',
              },
              motivo: {
                type: 'string',
                description: 'Motivo da criação do produto',
              },
              lojaId: { type: 'string', description: 'ID da loja associada' },
            },
          },
          example: [
            {
              id: 'prod-001',
              nome: 'Arroz',
              quantidadeInicial: 100,
              precoCusto: 10.5,
              precoVenda: 13.0,
              motivo: 'Estoque inicial',
              lojaId: 'loja-01',
            },
            {
              id: 'prod-002',
              nome: 'Feijão',
              quantidadeInicial: 80,
              precoCusto: 8.0,
              precoVenda: 10.0,
              motivo: 'Compra de fornecedor',
              lojaId: 'loja-02',
            },
            {
              id: 'prod-003',
              nome: 'Açúcar',
              quantidadeInicial: 120,
              precoCusto: 5.0,
              precoVenda: 6.5,
              motivo: 'Reposição de estoque',
              lojaId: 'loja-03',
            },
          ],
        },
      },
    },
  })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  @ApiResponse({ status: 404, description: 'Nenhum produto encontrado' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar produtos' })
  @ApiOperation({ summary: 'Listar todos os produtos' })
  async listarTodos() {
    return this.produtoService.listarProdutos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um produto por ID' })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID do produto' },
            nome: { type: 'string', description: 'Nome do produto' },
            quantidadeInicial: {
              type: 'number',
              description: 'Quantidade inicial do produto',
            },
            precoCusto: {
              type: 'number',
              description: 'Preço de custo do produto',
            },
            precoVenda: {
              type: 'number',
              description: 'Preço de venda do produto',
            },
            motivo: {
              type: 'string',
              description: 'Motivo da criação do produto',
            },
          },
          example: {
            id: 'prod-001',
            nome: 'Arroz',
            quantidadeInicial: 100,
            precoCusto: 10.5,
            precoVenda: 13.0,
            motivo: 'Estoque inicial',
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  async buscarPorId(@Param('id') id: string) {
    return this.produtoService.buscarProdutoPorId(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de um produto' })
  @ApiBody({
    description: 'Dados para atualização do produto',
    required: true,
    schema: {
      type: 'object',
      properties: {
        nome: { type: 'string', description: 'Nome do produto' },
        quantidadeInicial: {
          type: 'number',
          description: 'Quantidade inicial do produto',
        },
        precoCusto: {
          type: 'number',
          description: 'Preço de custo do produto',
        },
        precoVenda: {
          type: 'number',
          description: 'Preço de venda do produto',
        },
        motivo: {
          type: 'string',
          description: 'Motivo da atualização do produto',
        },
      },
      example: {
        nome: 'Feijão Carioca',
        quantidadeInicial: 150,
        precoCusto: 7.8,
        precoVenda: 9.5,
        motivo: 'Reposição de estoque com novo preço',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'ID do produto' },
            nome: { type: 'string', description: 'Nome do produto' },
            quantidadeInicial: {
              type: 'number',
              description: 'Quantidade inicial do produto',
            },
            precoCusto: {
              type: 'number',
              description: 'Preço de custo do produto',
            },
            precoVenda: {
              type: 'number',
              description: 'Preço de venda do produto',
            },
            motivo: {
              type: 'string',
              description: 'Motivo da atualização do produto',
            },
            lojaId: { type: 'string', description: 'ID da loja associada' },
          },
          example: {
            id: 'prod-002',
            nome: 'Feijão Carioca',
            quantidadeInicial: 150,
            precoCusto: 7.8,
            precoVenda: 9.5,
            motivo: 'Reposição de estoque com novo preço',
            lojaId: 'loja-02',
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async atualizar(
    @Param('id') id: string,
    @Body() data: Partial<AtualizarProdutoDTO>,
  ) {
    return this.produtoService.atualizarProduto(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um produto por ID' })
  @ApiResponse({ status: 204, description: 'Produto removido com sucesso' })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async remover(@Param('id') id: string) {
    await this.produtoService.removerProduto(id);
  }

  @Get('relatorio/:lojaId')
  @ApiOperation({ summary: 'Gerar relatório do estoque por loja' })
  @ApiResponse({
    status: 200,
    description: 'Relatório gerado com sucesso',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            lojaId: { type: 'string', description: 'ID da loja' },
            lojaNome: { type: 'string', description: 'Nome da loja' },
            totalProdutos: {
              type: 'number',
              description: 'Total de produtos no estoque',
            },
            produtos: {
              type: 'array',
              description: 'Lista de produtos no estoque',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', description: 'ID do produto' },
                  nome: { type: 'string', description: 'Nome do produto' },
                  quantidadeDisponivel: {
                    type: 'number',
                    description: 'Quantidade disponível em estoque',
                  },
                  precoCusto: {
                    type: 'number',
                    description: 'Preço de custo do produto',
                  },
                  precoVenda: {
                    type: 'number',
                    description: 'Preço de venda do produto',
                  },
                },
                example: {
                  id: 'prod-001',
                  nome: 'Arroz',
                  quantidadeDisponivel: 120,
                  precoCusto: 10.5,
                  precoVenda: 13.0,
                },
              },
            },
          },
          example: {
            lojaId: 'loja-01',
            lojaNome: 'Supermercado Central',
            totalProdutos: 2,
            produtos: [
              {
                id: 'prod-001',
                nome: 'Arroz',
                quantidadeDisponivel: 120,
                precoCusto: 10.5,
                precoVenda: 13.0,
              },
              {
                id: 'prod-002',
                nome: 'Feijão',
                quantidadeDisponivel: 80,
                precoCusto: 7.5,
                precoVenda: 9.0,
              },
            ],
          },
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Loja não encontrada' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async relatorioEstoque(@Param('lojaId') lojaId: string) {
    return this.produtoService.gerarRelatorioEstoque(lojaId);
  }
}
