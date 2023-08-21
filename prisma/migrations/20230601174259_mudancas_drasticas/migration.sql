/*
  Warnings:

  - Added the required column `idFuncionario` to the `Vendas` table without a default value. This is not possible if the table is not empty.
  - Made the column `idCliente` on table `Vendas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Clientes` DROP FOREIGN KEY `Clientes_id_fkey`;

-- DropForeignKey
ALTER TABLE `Vendas` DROP FOREIGN KEY `Vendas_id_fkey`;

-- AlterTable
ALTER TABLE `Vendas` ADD COLUMN `idFuncionario` INTEGER NOT NULL,
    MODIFY `idCliente` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_idFuncionario_fkey` FOREIGN KEY (`idFuncionario`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clientes` ADD CONSTRAINT `Clientes_idPessoas_fkey` FOREIGN KEY (`idPessoas`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
