import { Controller, Get, Post } from '@nestjs/common';
import { Configuracoes } from '@prisma/client';
import { ConfiguracaoService } from './configuracao.service';

@Controller('configuracao')
export class ConfiguracaoController {
    constructor(private readonly configuracaoService: ConfiguracaoService) {}


    @Get()
    async getConfig() {
        const config = await this.configuracaoService.getConfig();
        return config;
    }

    @Post()
    async setConfig(config: Configuracoes) {
        const configs = await this.configuracaoService.setConfig(config);
        return configs;
    }
}
