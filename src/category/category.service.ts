import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // async findCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
  //   return await this.prisma.category.findFirst({
  //     where: {
  //       name: data.name,
  //     },
  //   });
  // }

  // async getAllCategories() {
  //   const categories = await this.prisma.category.findMany();
  //   console.log(categories);
  //   return categories;
  // }
}
