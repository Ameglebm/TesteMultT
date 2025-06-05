import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  Min,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MetodoPagamento, StatusOrcamento } from '@prisma/client';

export class ItemProdutoDTO {
  @ApiProperty({ example: 'produto-id-123', required: false, nullable: true })
  @IsUUID('4', { message: 'O ID do produto deve ser um UUID válido' })
  @IsOptional()
  produtoId?: string | null;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'A quantidade deve ser um número' })
  @Min(1, { message: 'A quantidade mínima é 1' })
  quantidade!: number;

  @ApiProperty({ example: 200.0 })
  @IsNumber({}, { message: 'O preço unitário deve ser um número' })
  precoUnitario!: number;
}

export class ServicoDTO {
  @ApiProperty({ example: 'Troca da tela do celular modelo XYZ' })
  @IsString({ message: 'A descrição do serviço deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição do serviço não pode ser vazia' })
  descricao!: string;

  @ApiProperty({ example: 350.0 })
  @IsNumber({}, { message: 'O valor do serviço deve ser um número' })
  valor!: number;
}

export class CriarOrcamentoDTO {
  @ApiProperty({ example: 'cliente-id-abc123' })
  @IsUUID('4', { message: 'O ID do cliente deve ser um UUID válido' })
  clienteId!: string;

  @ApiProperty({ example: 'loja-id-123' })
  @IsUUID('4', { message: 'O ID da loja deve ser um UUID válido' })
  lojaId!: string;

  @ApiProperty({ type: [ItemProdutoDTO], required: false })
  @IsOptional()
  @IsArray({ message: 'Os itens devem ser um array de objetos' })
  @ValidateNested({ each: true })
  @Type(() => ItemProdutoDTO)
  itens?: ItemProdutoDTO[];

  @ApiProperty({ type: [ServicoDTO], required: false })
  @IsOptional()
  @IsArray({ message: 'Os serviços devem ser um array de objetos' })
  @ValidateNested({ each: true })
  @Type(() => ServicoDTO)
  servicos?: ServicoDTO[];

  @ApiProperty({ example: MetodoPagamento.PIX, enum: MetodoPagamento })
  @IsEnum(MetodoPagamento, { message: 'O método de pagamento deve ser válido' })
  metodoPagamento!: MetodoPagamento;

  @ApiProperty({ example: 3, required: false })
  @IsOptional()
  @IsNumber({}, { message: 'O número de parcelas deve ser um número' })
  numeroParcelas?: number;

  @ApiProperty({
    example: 5.0,
    required: false,
    description: 'Taxa de juros (%) se for parcelado',
  })
  @IsOptional()
  @IsNumber({}, { message: 'A taxa de juros deve ser um número' })
  @Min(0, { message: 'A taxa de juros não pode ser negativa' })
  taxaJuros?: number;

  @ApiProperty({ example: 'Troca da tela do celular modelo XYZ' })
  @IsString({ message: 'A descrição do orçamento deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição do orçamento não pode ser vazia' })
  descricao!: string;

  @ApiProperty({
    example: StatusOrcamento.ABERTO,
    enum: StatusOrcamento,
    required: false,
  })
  @IsOptional()
  @IsEnum(StatusOrcamento, {
    message: 'O status deve ser um valor válido do enum StatusOrcamento',
  })
  status?: StatusOrcamento;
}

export class ResponseOrcamentoDTO {
  @ApiProperty({ example: 'orcamento-id-123' })
  id!: string;

  @ApiProperty({ example: 'cliente-id-abc123' })
  clienteId!: string;

  @ApiProperty({ type: [ItemProdutoDTO], required: false })
  itens?: ItemProdutoDTO[];

  @ApiProperty({ type: [ServicoDTO], required: false })
  servicos?: ServicoDTO[];

  @ApiProperty({ example: 1000.0 })
  total!: number;

  @ApiProperty({ enum: StatusOrcamento, example: StatusOrcamento.ABERTO })
  status!: StatusOrcamento;

  @ApiProperty({ enum: MetodoPagamento, example: MetodoPagamento.PIX })
  metodoPagamento!: MetodoPagamento;

  @ApiProperty({ example: 3, required: false })
  numeroParcelas?: number;

  @ApiProperty({ example: 5.0, required: false })
  taxaJuros?: number;

  @ApiProperty({ example: 'Troca da tela do celular modelo XYZ' })
  descricao!: string;

  @ApiProperty({ example: 'loja-id-123' })
  lojaId!: string;

  @ApiProperty({ example: new Date().toISOString() })
  criadoEm!: Date;
}
