/*
  Warnings:

  - Added the required column `valorUnitario` to the `itVendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `itVendas` ADD COLUMN `valorUnitario` DOUBLE NOT NULL;
