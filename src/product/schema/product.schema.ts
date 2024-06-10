import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Category {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  description: string;

  @Field((type) => Int)
  userId: number;

  @Field(() => [Category])
  categories: Category[];
}
