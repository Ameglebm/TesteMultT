import { prisma } from '../../../lib/prisma';
import { IAuthRepository } from '../interface/authRepository.interface';
import { Loja } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import {
  SuperAdminCreateLojaDTO,
  LojaCreateFuncionarioDTO,
} from '../dtos/authDTO';

export class AuthRepository implements IAuthRepository {
  async criarLoja(data: SuperAdminCreateLojaDTO): Promise<Loja> {
    return await prisma.loja.create({
      data: {
        nome: data.nome,
        cnpj: data.cnpj,
        email: data.email,
        senha: data.senha, // senha já vem criptografada do service
      },
    });
  }

  async encontrarLojaPorEmail(email: string): Promise<any | null> {
    return await prisma.loja.findUnique({
      where: { email },
    });
  }

  async encontrarLojaPorCnpj(cnpj: string): Promise<any | null> {
    return await prisma.loja.findUnique({
      where: { cnpj },
    });
  }

  async criarFuncionario(data: LojaCreateFuncionarioDTO): Promise<any> {
    return await prisma.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        permissoes: data.permissoes,
        loja: { connect: { id: data.lojaId } },
      },
    });
  }

  async encontrarUsuarioPorEmail(email: string): Promise<any | null> {
    return await prisma.usuario.findUnique({
      where: { email },
    });
  }

  async verificarCredenciais(
    email: string,
    senha: string,
  ): Promise<any | null> {
    const usuario = await this.encontrarUsuarioPorEmail(email);
    if (!usuario) return null;

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    return senhaValida ? usuario : null;
  }
}
