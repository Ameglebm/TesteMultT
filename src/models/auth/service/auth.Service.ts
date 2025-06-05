import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { AuthRepository } from '../repository/authRepository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  LoginDTO,
  SuperAdminCreateLojaDTO,
  LojaCreateFuncionarioDTO,
} from '../dtos/authDTO';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO) {
    const loja = await this.repository.encontrarLojaPorEmail(loginDTO.email);

    console.log('📥 Email recebido:', loginDTO.email);
    console.log('📥 Senha recebida:', loginDTO.senha);
    console.log('🔍 Loja encontrada no banco:', loja);

    if (!loja) {
      throw new UnauthorizedException('Loja não encontrada');
    }

    const senhaConfere = await bcrypt.compare(loginDTO.senha, loja.senha);
    console.log('✅ A senha confere?', senhaConfere);

    if (!senhaConfere) {
      throw new UnauthorizedException('Senha incorreta');
    }

    // 🔐 Monta o payload completo com lojaId
    const payload = {
      sub: loja.id,
      email: loja.email,
      nome: loja.nome,
      role: 'LOJA',
      lojaId: loja.id,
    };

    // ✅ Gera só um token e usa ele na resposta
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      loja: {
        id: loja.id,
        nome: loja.nome,
      },
    };
  }

  async criarLoja(lojaDTO: SuperAdminCreateLojaDTO) {
    const lojaExistente = await this.repository.encontrarLojaPorEmail(
      lojaDTO.email,
    );

    if (lojaExistente) {
      throw new ConflictException('Email já cadastrado');
    }

    return this.repository.criarLoja({
      ...lojaDTO,
      senha: await bcrypt.hash(lojaDTO.senha, 10),
    });
  }

  async criarFuncionario(
    lojaId: string,
    funcionarioDTO: LojaCreateFuncionarioDTO,
  ) {
    try {
      if (!lojaId) {
        throw new BadRequestException(
          'Usuário deve estar vinculado a uma loja.',
        );
      }

      const funcionarioExistente =
        await this.repository.encontrarUsuarioPorEmail(funcionarioDTO.email);

      if (funcionarioExistente) {
        throw new ConflictException('Email já cadastrado');
      }

      return await this.repository.criarFuncionario({
        ...funcionarioDTO,
        lojaId,
        senha: await bcrypt.hash(funcionarioDTO.senha, 10),
      });
    } catch (error) {
      console.error('❌ Erro ao criar funcionário:');
      console.error('📄 Mensagem:', error.message);
      console.error('📂 Nome:', error.name);
      console.error('🧱 Stack:', error.stack);
      throw error; // Repassa o erro pro Nest responder corretamente
    }
  }
}
