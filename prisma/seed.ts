import { PrismaClient } from "@prisma/client";
import { createFormaPagamento } from "./seed_pagamento";
import { createClientes, createFuncionario, createPessoas } from "./seed_pessoas";
import { createCategory } from "./seed_category";

const prisma = new PrismaClient();


async function main() {
    
    await createPessoas(prisma);
    await createFuncionario(prisma);
    await createClientes(prisma);

    await createCategory(prisma);
    await createFormaPagamento(prisma);
   
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