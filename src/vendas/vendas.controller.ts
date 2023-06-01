import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { itVendas, Vendas } from '@prisma/client';
import { VendasService } from './vendas.service';

@Controller('vendas')
export class VendasController {
    constructor(private readonly vendasService: VendasService) {}

    @Get()
    async getVendas() {
        const vendas = await this.vendasService.getVendas();
        return vendas;
    }

    @Get(':id')
    async getVendaId(id: number) {
        const vendas = await this.vendasService.getVenda(id);
        return vendas;
    }

    @Put(':id')
    async updateVenda(id: number, venda: Vendas) {
        const vendas = await this.vendasService.updateVenda(id, venda);
        return vendas;
    }

    @Post()
    async setVenda(@Body() venda) {;
    
        const vendas = await this.vendasService.setVenda(venda);
        return vendas;
    }

    @Delete(':id')
    async deleteVenda(id: number) {
        const vendas = await this.vendasService.deleteVenda(id);
        return vendas;
    }
}
