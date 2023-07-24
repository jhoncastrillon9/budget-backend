import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {PassportModule} from '@nestjs/passport'
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Customer } from 'src/Entities';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { UpdateCustomerDto } from 'src/customers/dtos/UpdateCustomer.dto';

  @Controller('customers')
  export class CustomersController {
    constructor(private readonly customerService: CustomersService) {}


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<Customer[]> {
      return this.customerService.findAll();
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Customer> {
      return this.customerService.findOne(id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()    
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
      return this.customerService.create(createCustomerDto);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
      return this.customerService.update(updateCustomerDto);
    }
  
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      return this.customerService.remove(id);
    }

    
  }
  