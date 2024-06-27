import { Module } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradoresController } from './compradores.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompradoresController],
  providers: [CompradoresService, PrismaService],
})
export class CompradoresModule {}
