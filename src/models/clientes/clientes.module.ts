import { Module } from '@nestjs/common';
import { ClientesController } from './controller/clientes.controller';
import { ClienteService } from './service/clientes.Service';
import { ClienteRepository } from './repository/clientesRepository';

@Module({
  controllers: [ClientesController],
  providers: [ClienteService, ClienteRepository],
})
export class ClientesModule {}
