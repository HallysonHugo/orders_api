import { PrismaClient } from "@prisma/client";



async function createPessoas(prisma: PrismaClient) {
    await prisma.pessoas.create({
        data: {
            nome: 'Admin',
            cpf: '00000000000',
            email: '',
            telefone: '',
            endereco: '',
        }
    });
}

async function createClientes(prisma: PrismaClient) {
    await prisma.clientes.create({
        data: {
            idPessoas: 1,
        }
    });
}

async function createFuncionario(prisma: PrismaClient) {
    await prisma.funcionarios.create({
        data: {
            idPessoas: 1,
        }
    });
}

export {createPessoas, createClientes, createFuncionario}