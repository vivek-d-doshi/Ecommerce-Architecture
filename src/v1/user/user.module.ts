import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserIdentityRepository } from '../../database/enitites/user-identity.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserIdentity } from '../../database/enitites';

@Module({
  imports: [TypeOrmModule.forFeature([UserIdentity])],
  controllers: [UserController],
  providers: [UserService, UserIdentityRepository],
})
export class UserModule {}
