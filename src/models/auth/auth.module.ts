import { Module, Global, UseGuards } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.Service';
import { AuthRepository } from './repository/authRepository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard } from '../../middlewares/auth.guard';

@Global() 
@UseGuards(AuthGuard) 
@Module({
  imports: [
    ConfigModule.forRoot(), 
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
    AuthService, 
    AuthRepository,
    AuthGuard, 
    {
      provide: 'BCRYPT_SALT_ROUNDS', // Injeção de configuração do bcrypt
      useValue: 10,
    },
  ],
  exports: [
    AuthService,
    JwtModule,
    AuthGuard, 
    AuthRepository, 
  ],
})
export class AuthModule {}
