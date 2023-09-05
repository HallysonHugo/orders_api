import { Injectable } from '@nestjs/common';
import { FormaPagamento, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PagamentoService {
    async createPagamento(pagamento:FormaPagamento): Promise<FormaPagamento>{
        try{
            const formaPagamento = await prisma.formaPagamento.create({
                data: {
                    nome: pagamento.nome,
                },
            });
            return ;
        }
        catch(error){
            throw error;
        }
    }

    async getAllPagamento(): Promise<FormaPagamento[]>{
        try{
            const pagamento = await prisma.formaPagamento.findMany();
            return pagamento;
        }
        catch(error){
            throw error;
        }
    }

    async searchPagamento(search:string): Promise<FormaPagamento[]>{
        try{
            const pagamento = await prisma.formaPagamento.findMany({
                where:{
                    nome:{
                        contains: search,
                    }
                }
            });
            return pagamento;
        }
        catch(error){
            throw error;
        }
    }


    async updatePagamento(id:number, pagamento:FormaPagamento): Promise<FormaPagamento>{
        try{
            const formaPagamento = await prisma.formaPagamento.update({
                where:{
                    id: id,
                },
                data:{
                    nome: pagamento.nome,
                }
            });
            return formaPagamento;
        }
        catch(error){
            throw error;
        }
    }

    async deletePagamento(id:number): Promise<FormaPagamento>{
        try{
            const formaPagamento = await prisma.formaPagamento.delete({
                where:{
                    id: id,
                }
            });
            return formaPagamento;
        }
        catch(error){
            throw error;
        }
    }
}
