import { Injectable } from '@nestjs/common';
import { Ficha, itVendas, PrismaClient, Vendas } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class VendasService {

    async getVendas() {
        return prisma.vendas.findMany({
            include:{
                itVendas: {
                    include:{
                        ficha: true,
                    }
                },
            },
        });
    }

    async getVenda(id: number) {
        return prisma.vendas.findUnique({
            where: {
                id: id,
            },
        });
    }

    
    async createFicha(venda:Vendas, vendaItens: itVendas[]):Promise<itVendas[]>{
        const newListItVendas:itVendas[] = [];
        for(const itVenda of vendaItens){
            const ficha = await prisma.ficha.create({
                data: {
                    codigoItVendas: itVenda.idVenda,
                    codigoProduto: itVenda.idProduto,
                    retirado: false,
                    dataVenda: Date.now().toString(),
                },
            });
            const newItVenda = await prisma.itVendas.update({
                include:{
                    ficha: true,
                },
                where: {
                    id: itVenda.id,
                },
                data: {
                    idFicha: ficha.id,
                },
            });
            newListItVendas.push(newItVenda);
        }
        return newListItVendas;
    }
    

    async setVenda(venda:Vendas, itens:itVendas[]) {
        try{
           const newVenda =  await prisma.vendas.create({
                include:{
                    itVendas: true
                },
                data: {
                    valorTotal: venda.valorTotal,
                    descontoTotal: venda.descontoTotal,
                    idCliente: venda.idCliente,
                    idFuncionario: venda.idFuncionario,
                    itVendas: {
                        createMany: {
                            data: itens,
                        },
                    },

                },
            });
            const itVendas:itVendas[] =  await this.createFicha(newVenda, newVenda.itVendas);
            newVenda.itVendas = itVendas;
            return newVenda;
        }
        catch(e){
            console.log(e)
            throw e;
        }
       
    }

    async updateVenda(id: number, venda: Vendas) {
        return prisma.vendas.update({
            where: {
                id: id,
            },
            data: {
                idCliente: venda.idCliente,
                idFuncionario: venda.idFuncionario,
                valorTotal: venda.valorTotal,
                descontoTotal: venda.descontoTotal,
            },
        });
    }

    async updateItVenda(idVenda: number, itVenda: itVendas[]) {
        itVenda.forEach(async (itVenda) => {
            await prisma.itVendas.updateMany({
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
        return prisma.itVendas.findMany({
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
        return prisma.itVendas.deleteMany({
            where: {
               idVenda : idVenda,
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

    async retirarProduto(codigoFicha: number){
        try{
            const ficha:Ficha = await prisma.ficha.findUnique({
                where: {
                    id: codigoFicha,
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
