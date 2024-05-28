import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { CreateProductInput } from './dto/createProductInput';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductInput) {
    const { categories, userId, name, description } = data;

    const categoryIds = await this.prisma.category.findMany({
      where: {
        name: {
          in: categories,
        },
      },
      select: {
        id: true,
      },
    });

    const categoryProductConnections = categoryIds.map((item) => ({
      category: { connect: { id: item.id } },
    }));

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        user: {
          connect: { id: userId },
        },
        categories: {
          create: categoryProductConnections,
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      userId: product.userId,
      categories: product.categories.map((cat) => cat.category.name),
    };
  }
}
