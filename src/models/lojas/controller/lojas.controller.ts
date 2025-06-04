import {
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LojasService } from '../service/lojas.Service';
import { UpdateLojaDTO, ResponseLojaDTO } from '../dtos/lojasDTO';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Lojas')
@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as lojas' })
  @ApiResponse({ status: 200, description: 'Lista de lojas', type: [ResponseLojaDTO] })
  @ApiResponse({ status: 404, description: 'Nenhuma loja encontrada' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar lojas' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async listarLojas(): Promise<ResponseLojaDTO[]> {
    const lojas = await this.lojasService.listarLojas();
    return lojas.map((loja) => new ResponseLojaDTO(loja));
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String, description: 'ID da loja (UUID)' })
  @ApiOperation({ summary: 'Buscar loja por ID' })
  @ApiResponse({ status: 200, description: 'Loja encontrada', type: ResponseLojaDTO })
  @ApiResponse({ status: 404, description: 'Loja não encontrada' })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async buscarLoja(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<ResponseLojaDTO> {
    const loja = await this.lojasService.buscarLojaPorId(id);
    return new ResponseLojaDTO(loja);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String, description: 'ID da loja (UUID)' })
  @ApiOperation({ summary: 'Atualizar dados da loja' })
  @ApiResponse({ status: 200, description: 'Loja atualizada', type: ResponseLojaDTO })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Loja não encontrada' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async atualizarLoja(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateLojaDTO,
  ): Promise<ResponseLojaDTO> {
    const lojaAtualizada = await this.lojasService.atualizarLoja(id, data);
    return new ResponseLojaDTO(lojaAtualizada);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String, description: 'ID da loja (UUID)' })
  @ApiOperation({ summary: 'Remover loja por ID' })
  @ApiResponse({ status: 204, description: 'Loja removida com sucesso', content: {
    'application/json': { schema: { example: 'Loja removida com sucesso'}
  }} })
  @ApiResponse({ status: 400, description: 'ID inválido' })
  @ApiResponse({ status: 404, description: 'Loja não encontrada' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async removerLoja(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    await this.lojasService.removerLoja(id);
  }
}
