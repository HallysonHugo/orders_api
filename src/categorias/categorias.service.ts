import { Injectable } from '@nestjs/common';
import { Categorias, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class CategoriasService {
    getCategorias() {
        return prisma.categorias.findMany();
    }

    getCategoria(id: number) {      
        return prisma.categorias.findUnique({
            where: {
                id: id,
            },
        });
    }

    setCategoria(categoria: Categorias) {
        return prisma.categorias.create({
            data: {
               nome: categoria.nome,
            },
        });
    } 

    updateCategoria(id: number, categoria: Categorias) {
        return prisma.categorias.update({
            where: {
                id: id,
            },
            data: {
                nome: categoria.nome,
            },
        });
    }

    deleteCategoria(id: number) {
        return prisma.categorias.delete({
            where: {
                id: id,
            },
        });
    }
}
