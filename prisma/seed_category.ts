import { PrismaClient } from "@prisma/client";

async function createCategory(prisma:PrismaClient) {
    await prisma.categorias.create({
        data: {
            nome: 'Geral',
        }
    });
}

export {createCategory}