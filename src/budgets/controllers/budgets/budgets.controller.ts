import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {PassportModule} from '@nestjs/passport'
import { BudgetsService } from 'src/budgets/services/budgets/budgets.service';
import { CreateBudgetDto } from 'src/budgets/dtos/CreateBudget.dto';
import { Budget } from 'src/Entities';
import { UpdateBudgetDto } from 'src/budgets/dtos/UpdateBudgetdto';


@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetService: BudgetsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()  
  async findAll(): Promise<Budget[]> {
    return this.budgetService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Budget> {
    return this.budgetService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto): Promise<Budget> {
    return this.budgetService.create(createBudgetDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateBudgetDto: UpdateBudgetDto): Promise<Budget> {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.budgetService.remove(id);
  }
}

