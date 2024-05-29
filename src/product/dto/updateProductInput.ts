import { InputType, Field, Int } from '@nestjs/graphql';
import { CategoryInputFields } from './createProductInput';
@InputType()
export class UpdateProductInput {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  name: string;

  @Field(() => [CategoryInputFields])
  categories: CategoryInputFields[];
}
