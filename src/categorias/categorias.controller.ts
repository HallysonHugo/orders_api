import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Categorias } from '@prisma/client';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriasService: CategoriasService) {}

    @Get()
    getCategorias() {
        return this.categoriasService.getCategorias();
    }

    @Get(':id')
    getCategoria(id: number) {
        return this.categoriasService.getCategoria(id);
    }

    @Put(':id')
    updateCategoria(id: number, categoria: Categorias) {
        return this.categoriasService.updateCategoria(id, categoria);
    }

    @Post()
    setCategoria(categoria: Categorias) {
        return this.categoriasService.setCategoria(categoria);
    }

    @Delete(':id')
    deleteCategoria(id: number) {
        return this.categoriasService.deleteCategoria(id);
    }
}
