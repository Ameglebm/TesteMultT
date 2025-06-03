import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';
import { LojasModule } from './models/lojas/lojas.module';
import { ClientesModule } from './models/clientes/clientes.module';
import { ProdutosModule } from './models/produtos/produtos.module';
import { OrcamentosModule } from './models/orcamentos/orcamentos.module';
import { FinanceiroModule } from './models/financeiro/financeiro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    LojasModule,
    ClientesModule,
    ProdutosModule,
    OrcamentosModule,
    FinanceiroModule,

  ],
})
export class AppModule {}
