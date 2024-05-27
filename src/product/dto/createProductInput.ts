import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  description: string;

  @Field()
  name: string;

  @Field(() => Int)
  userId: number;

  @Field()
  categories: [string];
}
