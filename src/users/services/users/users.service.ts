import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
 
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  
  async findOne(userId: number): Promise<User> {
    return this.userRepository.findOneBy({userId:userId});
  }

  findUsersByUsername(username: string) {
    return this.userRepository.findOneBy({username:username});
  }

  async create(createUserDto: CreateUserDto): Promise<User> {    
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async update(updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({userId:updateUserDto.userId});
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}
