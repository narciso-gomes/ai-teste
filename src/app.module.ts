import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoriasModule } from './categorias/categorias.module';
import { CompradoresModule } from './compradores/compradores.module';

@Module({
  imports: [CategoriasModule, CompradoresModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
