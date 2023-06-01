/*
  Warnings:

  - Added the required column `dataVenda` to the `Ficha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ficha` ADD COLUMN `dataVenda` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Vendas` MODIFY `data` VARCHAR(191) NOT NULL,
    MODIFY `hora` VARCHAR(191) NOT NULL;
