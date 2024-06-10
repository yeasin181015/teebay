import { User } from './schema/user.schema';
import { UsersService } from './user.service';
import { CreateUserInput } from './dtos/createUserInput';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.create(createUserData);
  }

  @Query((returns) => User)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ) {
    return this.userService.login({ email, password });
  }

  @Query((returns) => [User])
  getAllUsers() {
    return this.userService.getUsers();
  }
}
