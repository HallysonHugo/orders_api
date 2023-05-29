/*
  Warnings:

  - A unique constraint covering the columns `[codigoFicha]` on the table `Ficha` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Ficha_codigoFicha_key` ON `Ficha`(`codigoFicha`);
