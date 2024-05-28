import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  name: string;

  @Field(() => [String])
  categories: [string];
}
