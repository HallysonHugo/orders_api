import { Body, Controller, Post, Query } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { FormaPagamento } from '@prisma/client';
import { DefaultResponse } from 'src/utils/default_response';

@Controller('pagamento')
export class PagamentoController {
    constructor(private readonly pagamentoService: PagamentoService) {}

    @Post()
    async createPagamento(@Body('pagamento')pagamento:FormaPagamento):Promise<DefaultResponse<FormaPagamento>>{
        try{
            const formaPagamento = await this.pagamentoService.createPagamento(pagamento);
            return new DefaultResponse<FormaPagamento>(201, 'Pagamento criado com sucesso', formaPagamento);
        }
        catch(error){
            return new DefaultResponse<any>(400, 'Erro ao criar pagamento', error);
        }
    }

    async getAllPagamento():Promise<DefaultResponse<FormaPagamento[]>>{
        try{
            const pagamento = await this.pagamentoService.getAllPagamento();
            return new DefaultResponse<FormaPagamento[]>(200, '', pagamento);
        }
        catch(error){
            return new DefaultResponse<any>(400, 'Erro ao buscar pagamentos', error);
        }
    }

    async searchPagamento(@Query('search') search:string):Promise<DefaultResponse<FormaPagamento[]>>{
        try{
            if(search == undefined || search == null || search == ''){
                return this.getAllPagamento();
            }
            const pagamento = await this.pagamentoService.searchPagamento(search);
            return new DefaultResponse<FormaPagamento[]>(200, '', pagamento);
        }
        catch(error){
            return new DefaultResponse<any>(400, 'Erro ao buscar pagamentos', error);
        }
    }

    async updatePagamento(id:number, pagamento:FormaPagamento):Promise<DefaultResponse<FormaPagamento>>{
        try{
            const formaPagamento = await this.pagamentoService.updatePagamento(id, pagamento);
            return new DefaultResponse<FormaPagamento>(200, 'Pagamento atualizado com sucesso', formaPagamento);
        }
        catch(error){
            return new DefaultResponse<any>(400, 'Erro ao atualizar pagamento', error);
        }
    }

    async deletePagamento(id:number):Promise<DefaultResponse<FormaPagamento>>{
        try{
            const formaPagamento = await this.pagamentoService.deletePagamento(id);
            return new DefaultResponse<FormaPagamento>(200, 'Pagamento deletado com sucesso', formaPagamento);
        }
        catch(error){
            return new DefaultResponse<any>(400, 'Erro ao deletar pagamento', error);
        }
    }
}

