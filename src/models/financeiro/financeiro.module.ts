import { Module } from '@nestjs/common';
import { FinanceiroController } from './controller/financeiro.controller';
import { FinanceiroService } from './service/financeiro.Service';
import { FinanceiroRepository } from './repository/financeiroRepository';

// Interfaces
import { IFinanceiroService } from './interface/financeiroService.interface';
import { IFinanceiroRepository } from './interface/financeiroRepository.interface';

@Module({
  controllers: [FinanceiroController],
  providers: [
    FinanceiroService, // <- adicione isso
    {
      provide: IFinanceiroService,
      useClass: FinanceiroService,
    },
    {
      provide: IFinanceiroRepository,
      useClass: FinanceiroRepository,
    },
  ],
})
export class FinanceiroModule {}
