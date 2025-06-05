import {
  LoginDTO,
  SuperAdminCreateLojaDTO,
  LojaCreateFuncionarioDTO,
} from '../dtos/authDTO';

export interface IAuthService {
  // Autenticação
  login(loginDTO: LoginDTO): Promise<{
    access_token: string;
    loja: {
      id: string;
      nome: string;
    };
  }>;

  // Operações de SuperAdmin
  criarLoja(lojaDTO: SuperAdminCreateLojaDTO): Promise<{
    id: string;
    nome: string;
  }>;

  // Operações de Loja
  criarFuncionario(funcionarioDTO: LojaCreateFuncionarioDTO): Promise<{
    id: string;
    nome: string;
    email: string;
  }>;
}
