import { Injectable } from '@nestjs/common';
import { Ficha, itVendas, PrismaClient, Vendas } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class VendasService {

    async getVendas() {
        return prisma.vendas.findMany();
    }

    async getVenda(id: number) {
        return prisma.vendas.findUnique({
            where: {
                id: id,
            },
        });
    }

    
    async createFicha(vendaItens: itVendas[]){
        vendaItens.forEach(async (itVenda) => {
            for(let i = 0; i < itVenda.quantidade; i++){
                const codigoFicha:string = itVenda.id.toString() + itVenda.idVenda.toString() + itVenda.idProduto.toString() + i.toString();
                await prisma.ficha.create({
                    data: {
                        codigoFicha: codigoFicha.padStart(10, '0'),
                        codigoItVendas: itVenda.idVenda,
                        codigoProduto: itVenda.idProduto,
                        retirado: false,
                    },
                });
            }
        });
    }
    

    async setVenda(venda: Vendas, itens: itVendas[]) {
        await prisma.vendas.create({
            data: {
                hora: venda.hora,
                valorTotal: venda.valorTotal,
                descontoTotal: venda.descontoTotal,
                data: venda.data,
            },
        });
        await this.setItVenda(itens, venda.id);
        await this.createFicha(itens);
    }

    async updateVenda(id: number, venda: Vendas) {
        return prisma.vendas.update({
            where: {
                id: id,
            },
            data: {
                data: venda.data,
                hora: venda.hora,
                valorTotal: venda.valorTotal,
                descontoTotal: venda.descontoTotal,
            },
        });
    }

    async updateItVenda(idVenda: number, itVenda: itVendas[]) {
        itVenda.forEach(async (itVenda) => {
            await prisma.itVendas.update({
                where: {
                    idVenda: idVenda,
                    idProduto: itVenda.idProduto,
                },
                data: {
                    quantidade: itVenda.quantidade,
                    desconto: itVenda.desconto,
                    valorUnitario: itVenda.valorUnitario,
                    total: itVenda.total,
                },
            });
        });
    }
                

    async deleteVenda(id: number) {
        return prisma.vendas.delete({
            where: {
                id: id,
            },
        });
    }

    async getItVendas(){
        return prisma.itVendas.findMany();
    }

    async getItVenda(idVenda: number){
        return prisma.itVendas.findUnique({
            where: {
                idVenda: idVenda,
            },
        });
    }

    async setItVenda(itens: itVendas[], idVendas: number) {
        await prisma.itVendas.createMany({
            data: itens,
            skipDuplicates: true,
        });
    }

    async deleteItVenda(idVenda: number, idProduto: number) {
        return prisma.itVendas.delete({
            where: {
                idVenda: idVenda,
                idProduto: idProduto,
            },
        });
    }

    async updateEstoque(idProduto: number, quantidade: number) {
        const produto = await prisma.produtos.findUnique({
            where: {
                id: idProduto,
            },
        });
        return await prisma.produtos.update({
            where: {
                id: idProduto,
            },
            data: {
                estoque: produto.estoque - quantidade,
            },
        });
    }

    async retirarProduto(codigoFicha:string){
        try{
            const ficha:Ficha = await prisma.ficha.findUnique({
                where: {
                    codigoFicha: codigoFicha,
                },
            });
            
            await prisma.ficha.update({
                where: {
                   id : ficha.id, 
                },
                data: {
                    retirado: true,
                },
            });
            await this.updateEstoque(ficha.codigoProduto, 1);
        }
        catch(e){
            throw e;
        }
    }
}
