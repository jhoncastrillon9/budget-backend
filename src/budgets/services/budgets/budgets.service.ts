import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from 'src/Entities';
import { CreateBudgetDto } from 'src/budgets/dtos/CreateBudget.dto';
import { UpdateBudgetDto } from 'src/budgets/dtos/UpdateBudgetdto';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetsService {

    constructor(
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>,
      ) {}
    
  async findAll(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

  async findOne(id: number): Promise<Budget> {
    return this.budgetRepository.findOneBy({budgetId:id});
  }

  async create(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    const budget = this.budgetRepository.create(createBudgetDto);
    return this.budgetRepository.save(budget);
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<Budget> {
    const budget = await this.budgetRepository.findOneBy({budgetId:id});
    this.budgetRepository.merge(budget, updateBudgetDto);
    return this.budgetRepository.save(budget);
  }

  async remove(id: number): Promise<void> {
    await this.budgetRepository.delete(id);
  }
}
