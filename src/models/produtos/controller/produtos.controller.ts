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
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  
  @ApiTags('Produtos')
  @Controller('produtos')
  export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}
  
    @Post()
    @ApiOperation({ summary: 'Criar um novo produto' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async criar(@Body() dto: CreateProdutoDTO) {
      return this.produtoService.criarProduto(dto);
    }
  
    @Get()
    @ApiResponse({ status: 200, description: 'Lista de produtos' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiResponse({ status: 404, description: 'Nenhum produto encontrado' })
    @ApiResponse({ status: 400, description: 'Erro ao buscar produtos' })
    @ApiOperation({ summary: 'Listar todos os produtos' })
    async listarTodos() {
      return this.produtoService.listarProdutos();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Buscar um produto por ID' })
    @ApiResponse({ status: 200, description: 'Produto encontrado' })
    @ApiResponse({ status: 400, description: 'ID inválido' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiResponse({ status: 404, description: 'Produto não encontrado' })
    async buscarPorId(@Param('id') id: string) {
      return this.produtoService.buscarProdutoPorId(id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar dados de um produto' })
    @ApiResponse({ status: 200, description: 'Produto atualizado' })
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
    @ApiResponse({ status: 200, description: 'Relatório gerado com sucesso' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async relatorioEstoque(@Param('lojaId') lojaId: string) {
      return this.produtoService.gerarRelatorioEstoque(lojaId);
    }
  }
  