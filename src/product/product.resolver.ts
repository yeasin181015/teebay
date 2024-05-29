import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProductInput';
import { UpdateProductInput } from './dto/updateProductInput';
import { DeleteProductInput } from './dto/deleteProductInput';

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
  deleteProduct(@Args({ name: 'deleteId', type: () => Int }) id: number) {
    return this.productService.delete(id);
  }

  @Mutation(() => String)
  buyProduct(
    @Args({ name: 'productId', type: () => Int }) productId: number,
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'type', type: () => String }) type: string,
  ) {
    return this.productService.buy(productId, userId, type);
  }

  // @Mutation(() => String)
  // deleteProduct(@Args({ name: 'deleteId', type: () => Int }) id: number) {
  //   return this.productService.delete(id);
  // }
}
