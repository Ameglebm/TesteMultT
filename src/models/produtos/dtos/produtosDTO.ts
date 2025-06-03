import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class CreateProdutoDTO {
  @ApiProperty({ example: 'Caixa de Som Bluetooth' })
  @IsString({ message: 'Nome deve ser texto' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio'})
  nome!: string;

  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: 'Quantidade deve ser um número' })
  @Min(0)
  quantidadeInicial!: number;

  @ApiProperty({ example: 55.9 })
  @IsNumber({}, { message: 'Preço de custo deve ser um número' })
  @Min(0)
  precoCusto!: number;

  @ApiProperty({ example: 99.9 })
  @IsNumber({}, { message: 'Preço de venda deve ser um número' })
  @Min(0)
  @IsOptional({message: 'Preço de venda é opcional'})
  precoVenda?: number;


  @ApiProperty({ example: 'f3854faa-038c-4aeb-ae1c-e38f211c466e' })
  @IsString({ message: 'ID da loja deve ser texto' })
  @IsNotEmpty({ message: 'ID da loja não pode ser vazio'})
  @IsUUID()
  lojaId!: string;

  @ApiProperty({ example: 'ENTRADA_MANUAL', required: false })
  @IsOptional({ message: 'Motivo é opcional' })
  @IsString({ message: 'Motivo deve ser texto' })
  motivo?: string;
}

export class RelatorioEstoqueDTO {
  @ApiProperty({ example: 10, description: 'Quantidade total de produtos diferentes cadastrados' })
  @IsNumber({}, { message: 'Quantidade total deve ser um número' })
  totalProdutos!: number;

  @ApiProperty({ example: 132, description: 'Soma total de todas as unidades em estoque' })
  @IsNumber({}, { message: 'Quantidade total deve ser um número' })
  quantidadeTotal!: number;

  @ApiProperty({ example: 2990.50, description: 'Valor total estimado do estoque (com base no preço de custo)' })
  @IsNumber({}, { message: 'Valor total deve ser um número' })
  valorTotal!: number;
}

export class AtualizarProdutoDTO {

  @ApiProperty({ example: 'f3854faa-038c-4aeb-ae1c-e38f211c466e' })
  @IsString({ message: 'ID do produto deve ser texto' })
  @IsNotEmpty({ message: 'ID do produto não pode ser vazio' })
  id!: string;

  @ApiProperty({ example: 'f3854faa-038c-4aeb-ae1c-e38f211c466e', required: false })
  @IsString({ message: 'ID da loja deve ser texto' })
  @IsNotEmpty({ message: 'ID da loja não pode ser vazio' })
  lojaId!: string;

  @ApiProperty({ example: 'Caixa de Som Bluetooth - Atualizado', required: false })
  @IsString({ message: 'Nome deve ser texto' })
  @IsOptional({ message: 'Nome é opcional' })
  nome?: string;

  @ApiProperty({ example: 15, required: false })
  @IsNumber({}, { message: 'Quantidade deve ser um número' })
  @Min(0)
  @IsOptional({ message: 'Quantidade é opcional' })
  quantidadeInicial?: number;

  @ApiProperty({ example: 60.0, required: false })
  @IsNumber({}, { message: 'Preço de custo deve ser um número' })
  @Min(0)
  @IsOptional({ message: 'Preço de custo é opcional' })
  precoCusto?: number;

}