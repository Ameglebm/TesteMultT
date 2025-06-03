// src/modules/produtos/produtos.module.ts
import { Module } from '@nestjs/common';
import { ProdutoService } from './service/produtos.Service';
import { ProdutoController } from './controller/produtos.controller';
import { ProdutoRepository } from './repository/produtosRepository';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository],
})
export class ProdutosModule {}
