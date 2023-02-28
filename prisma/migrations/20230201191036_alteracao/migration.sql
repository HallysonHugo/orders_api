/*
  Warnings:

  - You are about to drop the column `nome` on the `Produtos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Produtos` DROP COLUMN `nome`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL;
