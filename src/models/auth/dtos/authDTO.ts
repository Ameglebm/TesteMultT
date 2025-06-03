import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsArray, IsUUID } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ example: 'jmcell@exemplo.com', description: 'E-mail da loja' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email!: string;

  @ApiProperty({ example: 'senha123', description: 'Senha de acesso' })
  @IsString({ message: 'Senha deve ser texto' })
  @MinLength(6, { message: 'Senha precisa ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  senha!: string;
}

export class SuperAdminCreateLojaDTO {
  @ApiProperty({ example: 'JM Cell', description: 'Nome da loja' })
  @IsString({ message: 'Nome deve ser texto' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @ApiProperty({ example: '12345678000199', description: 'CNPJ da loja' })
  @IsString({ message: 'CNPJ deve ser texto' })
  @IsNotEmpty({ message: 'CNPJ é obrigatório' })
  cnpj!: string;

  @ApiProperty({ example: 'contato@jmcell.com', description: 'E-mail da loja' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email!: string;

  @ApiProperty({ example: 'senhaSegura123', description: 'Senha inicial' })
  @IsString({ message: 'Senha deve ser texto' })
  @MinLength(6, { message: 'Senha precisa ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  senha!: string;
}

export class LojaCreateFuncionarioDTO {
  @ApiProperty({ example: 'Fulano da Silva', description: 'Nome do funcionário' })
  @IsString({ message: 'Nome deve ser texto' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @ApiProperty({ example: 'fulano@jmcell.com', description: 'E-mail do funcionário' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email!: string;

  @ApiProperty({ example: 'senha123', description: 'Senha temporária' })
  @IsString({ message: 'Senha deve ser texto' })
  @MinLength(6, { message: 'Senha precisa ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  senha!: string;

  @ApiProperty({ 
    example: ['cadastrar_produto', 'gerar_orcamento'], 
    description: 'Permissões de acesso' 
  })
  @IsArray({ message: 'Permissões devem ser uma lista' })
  @IsString({ each: true, message: 'Cada permissão deve ser texto' })
  permissoes!: string[];

  @ApiProperty({ 
    example: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6', 
    description: 'ID da loja (automático pelo token)' 
  })
  @IsUUID('4', { message: 'ID da loja inválido' })
  @IsNotEmpty({ message: 'ID da loja é obrigatório' })
  lojaId!: string;
}