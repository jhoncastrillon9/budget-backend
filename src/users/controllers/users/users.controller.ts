import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import {PassportModule} from '@nestjs/passport'

  @Controller('users')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
      return this.userService.getUsers();
    }
  
    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
      return this.userService.findUsersById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }

  }