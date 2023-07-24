import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import {PassportModule} from '@nestjs/passport'
import { User } from 'src/Entities';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';

  @Controller('users')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
      return this.userService.findAll();
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
      return this.userService.findOne(id);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()    
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
      return this.userService.findOne(id);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {      
      return this.userService.create(createUserDto);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update( @Body() updateUserDto: UpdateUserDto): Promise<User> {
      return this.userService.update(updateUserDto);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      return this.userService.remove(id);
    }

  }