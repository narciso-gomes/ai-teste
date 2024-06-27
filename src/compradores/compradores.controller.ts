import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompradoresService } from './compradores.service';
import { CreateCompradoreDto } from './dto/create-compradore.dto';
import { UpdateCompradoreDto } from './dto/update-compradore.dto';

@ApiTags('Compradores')
@Controller('compradores')
export class CompradoresController {
  constructor(private readonly compradoresService: CompradoresService) {}

  @Post()
  create(@Body() createCompradoreDto: CreateCompradoreDto) {
    return this.compradoresService.create(createCompradoreDto);
  }

  @Get()
  findAll() {
    return this.compradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compradoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompradoreDto: UpdateCompradoreDto,
  ) {
    return this.compradoresService.update(+id, updateCompradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compradoresService.remove(+id);
  }
}
