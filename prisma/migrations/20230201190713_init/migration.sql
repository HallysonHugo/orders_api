-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `quantidade` DOUBLE NOT NULL,
    `unidades` VARCHAR(191) NOT NULL,
    `idCategoria` INTEGER NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `networkImage` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `itVendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idVenda` INTEGER NOT NULL,
    `idProduto` INTEGER NOT NULL,
    `desconto` DOUBLE NOT NULL,
    `quantidade` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCliente` INTEGER NOT NULL,
    `descontoTotal` DOUBLE NOT NULL,
    `valorTotal` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `Categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itVendas` ADD CONSTRAINT `itVendas_idVenda_fkey` FOREIGN KEY (`idVenda`) REFERENCES `Vendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itVendas` ADD CONSTRAINT `itVendas_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
