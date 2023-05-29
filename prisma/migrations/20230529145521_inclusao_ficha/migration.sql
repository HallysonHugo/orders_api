-- CreateTable
CREATE TABLE `Ficha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigoFicha` VARCHAR(191) NOT NULL,
    `codigoItVendas` INTEGER NOT NULL,
    `codigoProduto` INTEGER NOT NULL,
    `retirado` BOOLEAN NOT NULL,

    UNIQUE INDEX `Ficha_codigoItVendas_key`(`codigoItVendas`),
    UNIQUE INDEX `Ficha_codigoProduto_key`(`codigoProduto`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ficha` ADD CONSTRAINT `Ficha_id_fkey` FOREIGN KEY (`id`) REFERENCES `itVendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
