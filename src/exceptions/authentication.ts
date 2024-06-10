import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}

export class UserNotFound extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}
