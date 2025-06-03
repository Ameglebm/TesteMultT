import {
    Controller,
    Post,
    Get,
    Body,
    Query,
    UseGuards,
    Req,
    Param,
    Delete,
    BadRequestException,
    Patch,
  } from '@nestjs/common';
  import { FinanceiroService } from '../service/financeiro.Service';
  import { CriarSaidaFinanceiraDTO, RelatorioFinanceiroDTO, ResponseMovimentacaoFinanceiraDTO } from '../dtos/financeiroDTO';
  import { AuthGuard } from '../../../middlewares/auth.guard';
  import { ApiBearerAuth, ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
  
  @ApiTags('Financeiro')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Controller('financeiro')
  export class FinanceiroController {
    constructor(private readonly financeiroService: FinanceiroService) {}
  
    @Post('saida')
    @ApiOperation({ summary: 'Registrar uma saída financeira manualmente' })
    @ApiResponse({ status: 201, description: 'Saída financeira registrada com sucesso', type: ResponseMovimentacaoFinanceiraDTO })
    @ApiResponse({ status: 400, description: 'Erro ao registrar saída financeira' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async registrarSaidaManual(
      @Req() req,
      @Body() dto: CriarSaidaFinanceiraDTO,
    ): Promise<ResponseMovimentacaoFinanceiraDTO> {
      const lojaId = req.user.lojaId;
      return this.financeiroService.registrarSaidaManual(lojaId, dto);
    }
  
    @Get('relatorio')
    @ApiOperation({ summary: 'Gerar relatório financeiro' })
    @ApiResponse({ status: 200, description: 'Relatório financeiro gerado com sucesso', type: RelatorioFinanceiroDTO })
    @ApiResponse({ status: 400, description: 'Erro ao gerar relatório financeiro' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiQuery({ name: 'dataInicio', required: true, example: '2025-05-01' })
    @ApiQuery({ name: 'dataFim', required: true, example: '2025-05-31' })
    async gerarRelatorioFinanceiro(
      @Req() req,
      @Query('dataInicio') dataInicio: string,
      @Query('dataFim') dataFim: string,
    ): Promise<RelatorioFinanceiroDTO> {
      const lojaId = req.user.lojaId;

      // ✅ Converter e validar as datas
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);

      if (!dataInicio || !dataFim || isNaN(inicio.getTime()) || isNaN(fim.getTime())) {
        throw new BadRequestException('As datas de início e fim são obrigatórias e devem estar no formato YYYY-MM-DD.');
      }

      return this.financeiroService.gerarRelatorioFinanceiro(lojaId, inicio, fim);
    }

  
    @Get()
    @ApiOperation({ summary: 'Listar todas as movimentações financeiras' })
    @ApiResponse({ status: 200, description: 'Lista de movimentações financeiras retornada com sucesso', type: [ResponseMovimentacaoFinanceiraDTO] })
    @ApiResponse({ status: 400, description: 'Erro ao listar movimentações financeiras' })
    @ApiResponse({ status: 404, description: 'Loja não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiQuery({ name: 'dataInicio', required: false })
    @ApiQuery({ name: 'dataFim', required: false })
    async listarTodasMovimentacoes(
      @Req() req,
      @Query('dataInicio') dataInicio?: string,
      @Query('dataFim') dataFim?: string,
    ): Promise<ResponseMovimentacaoFinanceiraDTO[]> {
      const lojaId = req.user.lojaId;
      const inicio = dataInicio ? new Date(dataInicio) : undefined;
      const fim = dataFim ? new Date(dataFim) : undefined;
      return this.financeiroService.listarTodasMovimentacoes(lojaId, inicio, fim);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover uma movimentação financeira' })
    @ApiResponse({ status: 200, description: 'Movimentação financeira removida com sucesso' })
    @ApiResponse({ status: 400, description: 'Erro ao remover movimentação financeira' })
    @ApiResponse({ status: 404, description: 'Movimentação não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async removerMovimentacao(
      @Req() req,
      @Param('id') id: string,
    ): Promise<void> {
      const lojaId = req.user.lojaId;
      return this.financeiroService.removerMovimentacao(id, lojaId);
    }

    @Patch('editar/:id')
    @ApiOperation({ summary: 'Editar uma movimentação financeira' })
    @ApiResponse({ status: 200, description: 'Movimentação financeira editada com sucesso', type: ResponseMovimentacaoFinanceiraDTO })
    @ApiResponse({ status: 400, description: 'Erro ao editar movimentação financeira' })
    @ApiResponse({ status: 404, description: 'Movimentação não encontrada' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async editarMovimentacao(
      @Req() req,
      @Param('id') id: string,
      @Body() dto: CriarSaidaFinanceiraDTO,
    ): Promise<ResponseMovimentacaoFinanceiraDTO> {
      const lojaId = req.user.lojaId;
      return this.financeiroService.editarMovimentacao(id, lojaId, dto.metodoPagamento, dto.valor, dto.descricao);
    }
    
  }
  