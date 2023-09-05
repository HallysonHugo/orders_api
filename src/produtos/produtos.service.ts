import { Injectable } from '@nestjs/common';
import { PrismaClient, Produtos } from '@prisma/client';


  const prisma = new PrismaClient();
@Injectable()
export class ProdutosService {

    
    async setProdutos(produtos: Produtos):Promise<Produtos>{
      try{
        const lcto = await prisma.produtos.create({
          data: {
            descricao: produtos.descricao,
            nomeEtiqueta: produtos.nomeEtiqueta,
            preco: produtos.preco,
            estoque: produtos.estoque,
            unidades: produtos.unidades,
            idCategoria: produtos.idCategoria,
            imagem: produtos.imagem,
            promocao: produtos.promocao,
            color: produtos.color,
            estoqueMinimo: produtos.estoqueMinimo, 
            isFavorite: produtos.isFavorite,
          },
        });
        return lcto;
      }
      catch(error){
        throw error;
      }
    }

    async setFavorite(id: number, isFavorite: boolean):Promise<Produtos>{
      try{
        const lcto = await prisma.produtos.update({
          where: {
            id: id,
          },
          data: {
            isFavorite: isFavorite,
          },
        });
        return lcto;
      }
      catch(error){
        throw error;
      }
    }
    
    async getAllProdutos(): Promise<Produtos[]> {
      const produtos = await prisma.produtos.findMany({
        include: {
          categoria : true
        }
      });
      return produtos;
    }

    async updateProdutos(produtos: Produtos) {
      const lcto = await prisma.produtos.update({
        where: {
          id: produtos.id,
        },
        data: {
          descricao: produtos.descricao,
          preco: produtos.preco,
          estoque: produtos.estoque,
          unidades: produtos.unidades,
          idCategoria: produtos.idCategoria,
          imagem: produtos.imagem,
          networkImage: produtos.networkImage,
          promocao: produtos.promocao,
          estoqueMinimo: produtos.estoqueMinimo,
        },
      });
      return lcto;
    }
    async deleteProdutos(id: number) {
      const lcto = await prisma.produtos.delete({
        where: {
          id: id,
        },
      });
      return lcto;
    }


    async searchProducts(search: string) : Promise<Produtos[]> {
    try{
      const produtos = await prisma.produtos.findMany({
        include: {
          categoria : true
        },
        where: {
          descricao: {
            contains: search,
          },
        },
      });
      return produtos;
    }
    catch(error){
      throw error;
    }
  }
}
