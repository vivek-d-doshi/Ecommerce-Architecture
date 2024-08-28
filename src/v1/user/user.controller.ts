import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserObject } from './types';

@Controller({
  path: 'user/identity',
  version: ['1'],
})
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  createUser(@Body() bodyObj: UserObject) {
    return this.userService.createUser(bodyObj);
  }

  @Delete(':username')
  deleteUser(@Param('username') username: string) {
    return this.userService.deleteUser(username);
  }
}
