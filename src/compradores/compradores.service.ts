import { Injectable } from '@nestjs/common';
import { CreateCompradoreDto } from './dto/create-compradore.dto';
import { UpdateCompradoreDto } from './dto/update-compradore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompradoresService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCompradoreDto: CreateCompradoreDto) {
    return await this.prismaService.compradores.create({
      data: createCompradoreDto,
    });
  }

  async findAll() {
    return await this.prismaService.compradores.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.compradores.findUnique({ where: { id } });
  }

  async update(id: number, updateCompradoreDto: UpdateCompradoreDto) {
    return await this.prismaService.compradores.update({
      where: { id },
      data: updateCompradoreDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.compradores.delete({ where: { id } });
  }
}
