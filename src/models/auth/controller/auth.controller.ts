import { 
  Controller, 
  Post, 
  Body, 
  UseGuards, 
  Req, 
  BadRequestException,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  ConflictException
} from '@nestjs/common';
import { AuthService } from '../service/auth.Service';
import { 
  LoginDTO,
  SuperAdminCreateLojaDTO,
  LojaCreateFuncionarioDTO 
} from '../dtos/authDTO';
import { AuthGuard } from '../../../middlewares/auth.guard';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBearerAuth,
  ApiBody 
} from '@nestjs/swagger';
import { Request } from 'express';

interface JwtUser {
  sub: string;    
  email: string;
  nome: string;
  role: string;  
  lojaId: string; 
}

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('login')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Login da loja' })
@ApiResponse({
  status: HttpStatus.OK,
  description: 'Login realizado com sucesso',
  content: {
    'application/json': {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        loja: {
          id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
          nome: 'JM Cell'
        }
      }
    }
  }
})
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED, 
    description: 'Credenciais inválidas' 
  })
  @ApiBody({ type: LoginDTO })
  async login(@Body() dto: LoginDTO) {
    try {
      return await this.authService.login(dto);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Erro ao realizar login');
    }
  }
  @ApiResponse({status: HttpStatus.BAD_REQUEST,})
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Token inválido ou expirado' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Acesso negado' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Erro interno do servidor' })

  @Post('superadmin/criar-loja')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '[SUPERADMIN] Cadastrar nova loja' })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Loja criada com sucesso',
    schema: {
      example: {
        id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        nome: 'JM Cell',
        email: 'contato@jmcell.com',
        cnpj: '12345678000199'
      }
    }
  })
  @ApiResponse({ 
    status: HttpStatus.CONFLICT, 
    description: 'Email já cadastrado' 
  })
  @ApiBody({ type: SuperAdminCreateLojaDTO })
  async criarLoja(@Body() dto: SuperAdminCreateLojaDTO) {
    try {
      return await this.authService.criarLoja(dto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Erro ao criar loja');
    }
  }

  @Post('loja/criar-funcionario')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({ summary: '[LOJA] Criar novo funcionário' })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Funcionário criado com sucesso',
    schema: {
      example: {
        id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
        nome: 'Fulano da Silva',
        email: 'fulano@jmcell.com',
        lojaId: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        permissoes: ['cadastrar_produto', 'gerar_orcamento,']
      }
    }
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Dados inválidos ou loja não encontrada' 
  })
  @ApiResponse({ 
    status: HttpStatus.CONFLICT, 
    description: 'Email já cadastrado' 
  })
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED, 
    description: 'Token inválido ou expirado' 
  })
  @ApiBody({ type: LojaCreateFuncionarioDTO })
  async criarFuncionario(
    @Body() funcionarioDTO: Omit<LojaCreateFuncionarioDTO, 'lojaId'>,
    @Req() req: Request
  ) {
    try {
      const user = req.user as JwtUser;
      
      if (!user?.lojaId) {
        throw new BadRequestException('LojaId não encontrado no token');
      }

      if (user.role !== 'LOJA') {
        throw new UnauthorizedException('Apenas lojas podem criar funcionários');
      }

      // Monta o DTO completo com lojaId do token
      const dtoCompleto: LojaCreateFuncionarioDTO = {
        ...funcionarioDTO,
        lojaId: user.lojaId
      };

      return await this.authService.criarFuncionario(user.lojaId, dtoCompleto);
    } catch (error) {
      if (
        error instanceof ConflictException || 
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new BadRequestException(error.message || 'Erro ao criar funcionário');
    }
  }
}