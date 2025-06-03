import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { Cliente } from '@prisma/client';

export class CreateClienteDTO {
  @ApiProperty({ example: 'João da Silva', description: 'Nome do cliente' })
  @IsString({ message: 'Nome deve ser texto' })
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'joao@gmail.com', description: 'Email do cliente' })
  @IsEmail({}, { message: 'O email deve ser válido' })
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: '11999998888', description: 'Telefone do cliente (Whatsapp)' })
  @IsString({ message: 'Telefone deve ser texto' })
  @IsNotEmpty()
  telefone!: string;

  @ApiProperty({ example: '12345678900', description: 'CPF ou CNPJ do cliente' })
  @IsString({ message: 'CPF/CNPJ deve ser texto' })
  @IsNotEmpty()
  @Length(11, 14) // 11 para CPF, 14 para CNPJ
  cpfCnpj!: string;

  @ApiProperty({ example: 'Rua das Flores, 123 - Centro', description: 'Endereço completo' })
  @IsString({ message: 'Endereço deve ser texto' })
  @IsNotEmpty()
  endereco!: string;

  @ApiProperty({ example: 'uuid-loja-123', description: 'ID da loja associada' })
  @IsString({ message: 'Loja ID deve ser um texto válido' })
  @IsNotEmpty()
  lojaId!: string;
}

export class UpdateClienteDTO {
  @ApiProperty({ example: 'João da Silva', description: 'Nome do cliente', required: false })
  @IsString()
  nome?: string;

  @ApiProperty({ example: 'joao@gmail.com', description: 'Email do cliente', required: false })
  @IsEmail({}, { message: 'O email deve ser válido' })
  email?: string;

  @ApiProperty({ example: '11999998888', description: 'Telefone do cliente', required: false })
  @IsString({ message: 'Telefone deve ser texto' })
  telefone?: string;

  @ApiProperty({ example: '12345678900', description: 'CPF ou CNPJ', required: false })
  @IsString({ message: 'CPF/CNPJ deve ser texto' })
  @Length(11, 14)
  cpfCnpj?: string;

  @ApiProperty({ example: 'Rua das Flores, 123 - Centro', description: 'Endereço completo', required: false })
  @IsString({ message: 'Endereço deve ser texto' })
  endereco?: string;
}

export class ResponseClienteDTO {
  @ApiProperty({ example: '12' })
  id!: string;

  @ApiProperty({ example: 'João da Silva' })
  nome!: string;

  @ApiProperty({ example: 'joao@gmail.com' })
  email!: string;

  @ApiProperty({ example: '11999998888' })
  telefone!: string;

  @ApiProperty({ example: '12345678900' })
  cpfCnpj!: string;

  @ApiProperty({ example: 'Rua das Flores, 123 - Centro' })
  endereco!: string;

  @ApiProperty({ example: 'uuid-loja-123' })
  lojaId!: string;

  @ApiProperty({ example: '2025-04-25T17:31:00.000Z' })
  criadoEm!: Date;

  constructor(cliente: Cliente) {
    this.id = cliente.id;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.telefone = cliente.telefone;
    this.cpfCnpj = cliente.cpfCnpj;
    this.endereco = cliente.endereco;
    this.lojaId = cliente.lojaId;
    this.criadoEm = cliente.criadoEm;  // Usando o campo correto
  }
}
