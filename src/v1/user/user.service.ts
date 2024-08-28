import { HttpException, Injectable, Logger } from '@nestjs/common';
import { UserIdentityRepository } from '../../database/enitites/user-identity.repository';
import { UserObject } from './types';

@Injectable()
export class UserService {
  constructor(
    private readonly userIdentityRepository: UserIdentityRepository,
  ) {}

  async createUser(user: UserObject) {
    Logger.log(` createUser :: Started`);
    const exists = await this.userIdentityRepository.findOneById({
      Username: user.username,
    });
    if (exists) {
      Logger.error(`createUser :: ERROR :: User Already Exist`);
      throw new HttpException(
        {
          message: 'User Already Exists',
          code: `IDNT-1002`,
          type: 'SEVERE',
        },
        409,
      );
    }
    const encodedString = Buffer.from(user.password).toString('base64');
    console.log('encoded Password :', encodedString);
    const result = await this.userIdentityRepository.insertOne({
      Username: user.username,
      Password: encodedString as unknown as string,
    });
    Logger.log(`createUser :: Ended`);
    return {
      code: 'IDNT-0201',
      message: 'User created Successfully',
      data: result.Username,
    };
  }

  async deleteUser(username: string) {
    Logger.log(` deleteUser :: Started`);
    const notExist = await this.userIdentityRepository.findOneById({
      Username: username,
    });
    if (!notExist) {
      Logger.error(`deleteUser :: ERROR :: User does not exist`);
      throw new HttpException(
        {
          message: 'User Does Not Exists',
          code: `IDNT-1003`,
          type: 'SEVERE',
        },
        404,
      );
    }
    await this.userIdentityRepository.deleteOne({
      Username: username,
    });
    Logger.log(`deleteUser :: Ended`);
    return {
      code: 'IDNT-0200',
      message: 'User deleted Successfully',
    };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
