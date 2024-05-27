import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/createProductInput';

@Resolver(() => Product)
export class UserResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  create(@Args('createUserData') createProductData: CreateProductInput) {
    return this.productService.create(createProductData);
  }
}
