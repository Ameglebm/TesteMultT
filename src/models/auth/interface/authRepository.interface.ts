import {
  SuperAdminCreateLojaDTO,
  LojaCreateFuncionarioDTO,
} from '../dtos/authDTO';
import { Loja, Usuario } from '@prisma/client';

export interface IAuthRepository {
  criarLoja(data: SuperAdminCreateLojaDTO): Promise<Loja>;
  encontrarLojaPorEmail(email: string): Promise<Loja | null>;
  encontrarLojaPorCnpj(cnpj: string): Promise<Loja | null>;

  criarFuncionario(data: LojaCreateFuncionarioDTO): Promise<Usuario>;
  encontrarUsuarioPorEmail(email: string): Promise<Usuario | null>;
  verificarCredenciais(email: string, senha: string): Promise<Usuario | null>;
}
