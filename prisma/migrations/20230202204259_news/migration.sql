/*
  Warnings:

  - Added the required column `versao` to the `Configuracoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Configuracoes` ADD COLUMN `versao` VARCHAR(191) NOT NULL;
