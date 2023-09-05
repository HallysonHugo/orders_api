import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { VendasModule } from './vendas/vendas.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { PagamentoModule } from './pagamento/pagamento.module';

@Module({
  imports: [ProdutosModule, CategoriasModule, VendasModule, ConfiguracaoModule, PagamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
