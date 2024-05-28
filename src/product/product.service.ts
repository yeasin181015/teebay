import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput } from './dto/createProductInput';
import { UpdateProductInput } from './dto/updateProductInput';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductInput) {
    const { categories, userId, name, description } = data;

    const categoryList = categories.map((cat) => {
      const item = {
        name: cat,
      };
      return item;
    });

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        user: {
          connect: { id: userId },
        },
        categories: {
          create: categoryList,
        },
      },
      include: {
        categories: true,
      },
    });

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      userId: product.userId,
      categories: product.categories.map((cat) => cat.name),
    };
  }

  async edit(productId: number, data: UpdateProductInput) {
    // const product = await this.prisma.product.update({
    //   where: {
    //     id: productId,
    //   },
    //   data: {
    //     name: data.name,
    //     description: data.description,
    //     categories: data.categories,
    //   },
    // });
  }

  delete() {}
}
