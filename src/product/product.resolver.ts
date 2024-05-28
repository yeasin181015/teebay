import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProductInput';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductData') createProductData: CreateProductInput,
  ) {
    return this.productService.create(createProductData);
  }
}
