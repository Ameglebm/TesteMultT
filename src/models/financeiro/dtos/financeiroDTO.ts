import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { MetodoPagamento, TipoMovimentacao } from '@prisma/client';

export class CriarSaidaFinanceiraDTO {
  @ApiProperty({ enum: MetodoPagamento, example: MetodoPagamento.DINHEIRO })
  @IsEnum(MetodoPagamento)
  metodoPagamento: MetodoPagamento;

  @ApiProperty({ example: 75.5 })
  @IsNumber()
  @IsPositive()
  valor: number;

  @ApiProperty({ example: 'Compra de materiais' })
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
export class EditarSaidaFinanceiraDTO {
  @ApiProperty({ example: '3a1b2c3d-4e5f-6789-abcd-1234567890ef' })
  @IsString({ message: 'ID deve ser uma string' })
  @IsNotEmpty({ message: 'ID não pode ser vazio' })
  id: string;

  @ApiProperty({ enum: MetodoPagamento, example: MetodoPagamento.DINHEIRO })
  @IsEnum(MetodoPagamento, { message: 'Metodo de pagamento deve ser um Enum' })
  metodoPagamento: MetodoPagamento;

  @ApiProperty({ example: 75.5 })
  @IsNumber({}, { message: 'Valor deve ser um número' })
  @IsPositive()
  valor: number;

  @ApiProperty({ example: 'Compra de materiais' })
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazia' })
  descricao: string;
}

export class ResponseMovimentacaoFinanceiraDTO {
  @ApiProperty({ example: '3a1b2c3d-4e5f-6789-abcd-1234567890ef' })
  id: string;

  @ApiProperty({ example: 'f3854faa-038c-4aeb-ae1c-e38f211c466e' })
  lojaId: string;

  @ApiProperty({ enum: TipoMovimentacao, example: TipoMovimentacao.SAIDA })
  tipo: TipoMovimentacao;

  @ApiProperty({ enum: MetodoPagamento, example: MetodoPagamento.DINHEIRO })
  metodoPagamento: MetodoPagamento;

  @ApiProperty({ example: 75.5 })
  valor: number;

  @ApiProperty({ example: 'Compra de materiais' })
  descricao: string;

  @ApiProperty({ example: new Date().toISOString() })
  criadoEm: Date;
}

export class RelatorioFinanceiroDTO {
  @ApiProperty({ example: 1500 })
  totalEntradas: number;

  @ApiProperty({ example: 900 })
  totalSaidas: number;

  @ApiProperty({ example: 600 })
  saldo: number;

  @ApiProperty({
    example: {
      PIX: 1500,
      DINHEIRO: 500,
      DEBITO: 300,
      CREDITO_VISTA: 200,
      CREDITO_PARCELADO: 100,
    },
  })
  totalPorMetodo: Record<MetodoPagamento, number>;
}
