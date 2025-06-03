import { Module } from '@nestjs/common';
import { LojasService } from './service/lojas.Service';
import { LojasController } from './controller/lojas.controller';
import { LojaRepository } from './repository/lojasRepository'; 

@Module({
  controllers: [LojasController],
  providers: [LojasService, LojaRepository], //registrar o repositório como provider
  exports: [LojasService], // exportar o serviço para ser utilizado em outros módulos
})
export class LojasModule {}
