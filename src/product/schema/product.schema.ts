import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  description: string;

  @Field((type) => Int)
  userId: number;

  @Field()
  categories: [string];
}
