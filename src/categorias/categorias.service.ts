import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.prismaService.categorias.create({
      data: createCategoriaDto,
    });
  }

  async findAll() {
    return await this.prismaService.categorias.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.categorias.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.prismaService.categorias.update({
      where: { id },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.categorias.delete({ where: { id } });
  }
}
