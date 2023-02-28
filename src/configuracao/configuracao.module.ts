import { Module } from '@nestjs/common';
import { ConfiguracaoController } from './configuracao.controller';
import { ConfiguracaoService } from './configuracao.service';

@Module({
  controllers: [ConfiguracaoController],
  providers: [ConfiguracaoService]
})
export class ConfiguracaoModule {}
