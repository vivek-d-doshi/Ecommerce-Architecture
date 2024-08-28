import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import { UserIdentity } from './user-identity.entity';
@Injectable()
export class UserIdentityRepository {
  constructor(
    @InjectRepository(UserIdentity)
    private userIdentityRepository: Repository<UserIdentity>,
  ) {}

  findOneById(
    where: FindOptionsWhere<UserIdentity>,
    relations?: FindOptionsRelations<UserIdentity>,
  ): Promise<UserIdentity | null> {
    return this.userIdentityRepository.findOne({
      where,
      relations,
    });
  }

  insertOne(params: Partial<UserIdentity>): Promise<UserIdentity> {
    const userObject = this.userIdentityRepository.create(params);
    return this.userIdentityRepository.save(userObject);
  }

  update(params: Partial<UserIdentity>): Promise<UserIdentity> {
    return this.userIdentityRepository.save(params);
  }

  deleteOne(params: Partial<UserIdentity>) {
    return this.userIdentityRepository.delete(params);
  }
}
