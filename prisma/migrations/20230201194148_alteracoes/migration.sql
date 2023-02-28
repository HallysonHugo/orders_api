/*
  Warnings:

  - You are about to drop the column `quantidade` on the `Produtos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idVenda]` on the table `itVendas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estoque` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estoqueMinimo` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Configuracoes` MODIFY `bloquearSemEstoque` BOOLEAN NULL,
    MODIFY `avisarSemEstoque` BOOLEAN NULL,
    MODIFY `avisarEstoqueMinimo` BOOLEAN NULL,
    MODIFY `bloquearEstoqueMinimo` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Produtos` DROP COLUMN `quantidade`,
    ADD COLUMN `estoque` DOUBLE NOT NULL,
    ADD COLUMN `estoqueMinimo` DOUBLE NOT NULL,
    MODIFY `imagem` VARCHAR(191) NULL,
    MODIFY `networkImage` BOOLEAN NULL;

-- CreateIndex
CREATE UNIQUE INDEX `itVendas_idVenda_key` ON `itVendas`(`idVenda`);
