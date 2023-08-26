import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.categorias.create({
        data: {
            nome: 'Geral',
        }
    });
    await prisma.pessoas.create({
        data: {
            nome: 'Admin',
            cpf: '00000000000',
            email: '',
            telefone: '',
            endereco: '',
        }
    });

    await prisma.clientes.create({
        data: {
            idPessoas: 1,
        }
    });

    await prisma.funcionarios.create({
        data: {
            idPessoas: 1,
        }
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })