import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true, defaultValue: '' })
  firstName: string;

  @Field({ nullable: true, defaultValue: '' })
  lastName: string;

  @Field({ nullable: true, defaultValue: '' })
  address: string;

  @Field({ nullable: true, defaultValue: '' })
  phoneNumber: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
