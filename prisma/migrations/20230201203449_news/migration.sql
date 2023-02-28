/*
  Warnings:

  - A unique constraint covering the columns `[idProduto]` on the table `itVendas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `itVendas_idProduto_key` ON `itVendas`(`idProduto`);
