import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductService } from './product.service';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [PrismaModule, CategoryService],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
