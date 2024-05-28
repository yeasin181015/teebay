import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProductInput';
import { UpdateProductInput } from './dto/updateProductInput';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductData') createProductData: CreateProductInput,
  ) {
    return this.productService.create(createProductData);
  }

  @Mutation(() => Product)
  editProduct(
    @Args('updateProductData') updateProductData: UpdateProductInput,
  ) {
    return this.productService.edit(updateProductData.id, updateProductData);
  }

  @Mutation(() => String)
  deleteProduct() {
    return this.productService.delete();
  }
}
