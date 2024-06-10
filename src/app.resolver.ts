import { Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class AppResolver {}
