import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput } from './dto/createProductInput';
import { UpdateProductInput } from './dto/updateProductInput';
import { DeleteProductInput } from './dto/deleteProductInput';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductInput) {
    const { categories, userId, name, description } = data;

    const categoryConnections = categories.map((cat) => ({
      categoryId: cat.id,
    }));

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        user: {
          connect: { id: userId },
        },
        // categories: {
        //   connect: categoryList,
        // },
        categories: {
          create: categories.map((cat) => ({
            category: {
              connect: { id: cat.id },
            },
          })),
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

    const formattedCategories = product.categories.map((cat) => ({
      id: cat.category.id,
      name: cat.category.name,
    }));
    // const product = await this.prisma.product.create({
    //   data: {
    //     name,
    //     description,
    //     user: {
    //       connect: { id: userId },
    //     },
    //     categories: {
    //       connect: categoryList,
    //     },
    //   },
    //   include: {
    //     categories: true,
    //   },
    // });
    // console.log(product)
    // console.log(product.categories[0].category)
    // return product;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      userId: product.userId,
      categories: formattedCategories,
    };
  }

  async edit(productId: number, data: UpdateProductInput) {
    const product = await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: data.name,
        description: data.description,
        categories: {
          deleteMany: {},
          create: data.categories.map((cat) => ({
            category: { connect: { id: cat.id } },
          })),
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

    const formattedCategories = product.categories.map((cat) => ({
      id: cat.category.id,
      name: cat.category.name,
    }));

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      userId: product.userId,
      categories: formattedCategories,
    };
    // return product
  }

  async delete(deleteId: number) {
    const isDeleted = await this.prisma.product.delete({
      where: {
        id: deleteId,
      },
    });
    console.log(isDeleted);

    if (isDeleted) return 'Product deleted';
    else return "Product couldn't be deleted";
  }

  async buy(productId: number, userId: number, type: string) {
    const result = await this.prisma.transaction.create({
      data: {
        type,
        productId,
        userId,
      },
      include: {
        product: true,
        user: true,
      },
    });

    return 'aaa';
  }
}
