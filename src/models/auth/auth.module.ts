import { Module, Global, UseGuards } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.Service';
import { AuthRepository } from './repository/authRepository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard } from '../../middlewares/auth.guard';

@Global() // Tornando o módulo global para que possa ser usado em qualquer parte da aplicação
@UseGuards(AuthGuard) // Aplicando o AuthGuard globalmente
@Module({
  imports: [
    ConfigModule.forRoot(), // Adicionado para usar variáveis de ambiente
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '8h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, // Forma simplificada sem usar string token
    AuthRepository,
    AuthGuard, // Adicionado como provider
    {
      provide: 'BCRYPT_SALT_ROUNDS', // Injeção de configuração do bcrypt
      useValue: 10,
    },
  ],
  exports: [
    AuthService,
    JwtModule,
    AuthGuard, // Exportado para uso em outros módulos
    AuthRepository, // Exportado para uso em outros módulos
  ],
})
export class AuthModule {}