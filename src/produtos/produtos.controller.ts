import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produtos } from '@prisma/client';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService:ProdutosService ) {}

    @Post()
    async setProdutos(@Body() produto: Produtos) {
      try{
        const produtos = await this.produtosService.setProdutos(produto);
        return produtos;
      }
      catch(error){
        throw error;
      }
    }
  
    @Get()
    async getProdutos() {
      const produtos = await this.produtosService.getAllProdutos();
      return produtos;
    }
  
    @Get(':id')
    async getProdutosId(id: number) {
      const produtos = await this.produtosService.getProdutos(id);
      return produtos;
    }
  
    @Put(':id')
    async updateProdutos(id: number, produto: Produtos) {
      const produtos = await this.produtosService.updateProdutos(id, produto);
      return produtos;
    }

    @Put('favorite/:id')
    async setFavorite(id: number, @Body() isFavorite: boolean) {
      const produtos = await this.produtosService.setFavorite(id, isFavorite);
      return produtos;
    }


    @Delete(':id')
    async deleteProdutos(@Param('id') id: string) {
      const idProduto : number = +id;
      const produtos = await this.produtosService.deleteProdutos(idProduto);
      return produtos;
    }
}
