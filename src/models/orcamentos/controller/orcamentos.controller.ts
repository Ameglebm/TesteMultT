import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Patch,
    Delete,
    UseGuards,
    Req,
  } from '@nestjs/common';
  import { OrcamentosService } from '../service/orcamentos.Service';
  import { CriarOrcamentoDTO, ResponseOrcamentoDTO } from '../dtos/orcamentosDTO';
  import { AuthGuard } from '../../../middlewares/auth.guard';
  import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
  
  @ApiTags('Orçamentos')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Controller('orcamentos')
  export class OrcamentosController {
    constructor(private readonly orcamentosService: OrcamentosService) {}
  
    @Post()
    @ApiOperation({ summary: 'Criar um novo orçamento' })
    @ApiResponse({ status: 201, description: 'Orçamento criado com sucesso', type: ResponseOrcamentoDTO })
    @ApiResponse({ status: 400, description: 'Erro ao criar orçamento' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async criarOrcamento(
      @Body() dados: CriarOrcamentoDTO,
      @Req() req: Request
    ): Promise<ResponseOrcamentoDTO> {
      const lojaId = (req as any).user?.lojaId;

      if (!lojaId) {
        throw new Error('Loja não identificada no token JWT');
      }
  
      return this.orcamentosService.criarOrcamento(dados, lojaId);
    }
  
    @Get('/loja/:lojaId')
    @ApiOperation({ summary: 'Listar todos os orçamentos de uma loja' })
    @ApiResponse({ status: 200, description: 'Lista de orçamentos retornada com sucesso' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async listarOrcamentosPorLoja(
      @Param('lojaId') lojaId: string,
    ): Promise<ResponseOrcamentoDTO[]> {
      return this.orcamentosService.listarOrcamentosPorLoja(lojaId);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Buscar orçamento por ID' })
    @ApiResponse({ status: 200, description: 'Orçamento retornado com sucesso' })
    @ApiResponse({ status: 404, description: 'Orçamento não encontrado' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async buscarPorId(@Param('id') id: string): Promise<ResponseOrcamentoDTO> {
      return this.orcamentosService.buscarOrcamentoPorId(id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar orçamento por ID' })
    @ApiResponse({ status: 200, description: 'Orçamento atualizado com sucesso' })
    @ApiResponse({ status: 404, description: 'Orçamento não encontrado' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiResponse({ status: 400, description: 'Erro ao atualizar orçamento' })
    async atualizar(
      @Param('id') id: string,
      @Body() dados: Partial<CriarOrcamentoDTO>,
    ): Promise<ResponseOrcamentoDTO> {
      return this.orcamentosService.atualizarOrcamento(id, dados);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Excluir orçamento por ID' })
    @ApiResponse({ status: 200, description: 'Orçamento excluído com sucesso' })
    @ApiResponse({ status: 404, description: 'Orçamento não encontrado' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiResponse({ status: 400, description: 'Erro ao excluir orçamento' })
    async deletar(@Param('id') id: string): Promise<{ mensagem: string }> {
      await this.orcamentosService.deletarOrcamento(id);
      return { mensagem: 'Orçamento excluído com sucesso' };
    }

    

  }
  