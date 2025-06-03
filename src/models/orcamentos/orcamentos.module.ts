import { Module } from '@nestjs/common';
import { OrcamentosController } from './controller/orcamentos.controller';
import { OrcamentosService } from './service/orcamentos.Service';
import { OrcamentosRepository } from './repository/orcamentosRepository';
import { IOrcamentosRepository } from './interface/orcamentosRepository.interface';

@Module({
  controllers: [OrcamentosController],
  providers: [
    OrcamentosService,
    {
      provide: IOrcamentosRepository, // aqui você vincula a interface
      useClass: OrcamentosRepository, // à classe concreta
    },
  ],
})
export class OrcamentosModule {}
