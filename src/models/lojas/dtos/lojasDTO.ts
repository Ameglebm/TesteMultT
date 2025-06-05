import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { Loja } from '@prisma/client';

export class UpdateLojaDTO {
  @ApiProperty({
    example: 'Nova JM Cell',
    description: 'Novo nome da loja',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Nome deve ser texto' })
  nome?: string;

  @ApiProperty({
    example: 'contato@novaloja.com',
    description: 'Novo e-mail da loja',
    required: false,
  })
  @IsOptional()
  @IsEmail({}, { message: 'E-mail inválido' })
  email?: string;
}

// DTO de resposta padrão para listagem e detalhes da loja
export class ResponseLojaDTO {
  @ApiProperty({ example: uuidv4(), description: 'ID da loja' })
  id!: string;

  @ApiProperty({ example: 'JM Cell', description: 'Nome da loja' })
  nome!: string;

  @ApiProperty({ example: '12345678000199', description: 'CNPJ da loja' })
  cnpj!: string;

  @ApiProperty({ example: 'contato@jmcell.com', description: 'E-mail da loja' })
  email!: string;

  @ApiProperty({
    example: '2024-04-22T12:34:56Z',
    description: 'Data de criação da loja',
  })
  criadoEm!: Date;

  constructor(loja: Loja) {
    this.id = loja.id;
    this.nome = loja.nome;
    this.cnpj = loja.cnpj;
    this.email = loja.email;
    this.criadoEm = loja.criadoEm;
  }
}
