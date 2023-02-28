/*
  Warnings:

  - Added the required column `total` to the `itVendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `itVendas` ADD COLUMN `total` DOUBLE NOT NULL;
