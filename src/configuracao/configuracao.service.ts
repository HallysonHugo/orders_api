import { Injectable } from '@nestjs/common';
import { Configuracoes, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class ConfiguracaoService {


    async getConfig() {
        return await prisma.configuracoes.findMany();
    }

    async setConfig(config: Configuracoes) {
        const configs = await prisma.configuracoes.findMany();
        if (configs.length > 0) {
            return await this.updateConfig(configs[0].id, config);
        }
        else {
            return await prisma.configuracoes.create({
                data: {
                avisarEstoqueMinimo: config.avisarEstoqueMinimo,
                bloquearEstoqueMinimo: config.bloquearEstoqueMinimo,
                bloquearSemEstoque  : config.bloquearSemEstoque,
                avisarSemEstoque    : config.avisarSemEstoque, 
                versao: config.versao,
                },
            }); 
        }
    }

    async updateConfig(id: number, config: Configuracoes) {
        return await prisma.configuracoes.update({
            where: {
                id: id,
            },
            data: {
                avisarEstoqueMinimo: config.avisarEstoqueMinimo,
                bloquearEstoqueMinimo: config.bloquearEstoqueMinimo,
                bloquearSemEstoque  : config.bloquearSemEstoque,
                avisarSemEstoque    : config.avisarSemEstoque, 
                versao: config.versao,
            },
        });
    }

    async updateConfigVersao(id: number, versao: string) {
        return await prisma.configuracoes.update({
            where: {
                id: id,
            },
            data: {
                versao: versao,
            },
        });
    }
    

    async deleteConfig(id: number) {
        return await prisma.configuracoes.delete({
            where: {
                id: id,
            },
        });
    }

}