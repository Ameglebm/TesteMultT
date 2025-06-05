import { Module } from '@nestjs/common';
import { LojasService } from './service/lojas.Service';
import { LojasController } from './controller/lojas.controller';
import { LojaRepository } from './repository/lojasRepository';

@Module({
  controllers: [LojasController],
  providers: [LojasService, LojaRepository],
  exports: [LojasService],
})
export class LojasModule {}
