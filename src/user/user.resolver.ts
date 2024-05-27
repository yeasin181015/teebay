import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserInput } from './dtos/createUserInput';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => User)
  create(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.create(createUserData);
  }

  @Query(() => User)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ) {
    return this.userService.login({ email, password });
  }
}
