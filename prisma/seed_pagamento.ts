import { PrismaClient } from "@prisma/client";


async function createFormaPagamento(prisma: PrismaClient) {
    await prisma.formaPagamento.create({
        data: {
            nome: 'Dinheiro',
        }
    });
    await prisma.formaPagamento.create({
        data: {
            nome: 'Cartão Crédito',
        }
    });
    await prisma.formaPagamento.create({
        data: {
            nome: 'Cartão Débito',
        }
    });
    await prisma.formaPagamento.create({
        data: {
            nome: 'Pix',
        }
    });
}

export {createFormaPagamento}