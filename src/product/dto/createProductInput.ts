import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CategoryInputFields {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
@InputType()
export class CreateProductInput {
  @Field()
  description: string;

  @Field()
  name: string;

  @Field(() => Int)
  userId: number;

  @Field(() => [CategoryInputFields])
  categories: CategoryInputFields[];
}
