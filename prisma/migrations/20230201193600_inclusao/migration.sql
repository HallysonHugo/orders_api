/*
  Warnings:

  - Added the required column `precoPromocao` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promocao` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Produtos` ADD COLUMN `precoPromocao` DOUBLE NOT NULL,
    ADD COLUMN `promocao` BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE `Configuracoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bloquearSemEstoque` BOOLEAN NOT NULL,
    `avisarSemEstoque` BOOLEAN NOT NULL,
    `avisarEstoqueMinimo` BOOLEAN NOT NULL,
    `bloquearEstoqueMinimo` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
