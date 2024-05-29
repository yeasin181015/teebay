import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class DeleteProductInput {
  @Field(() => Int)
  id: number;
}
