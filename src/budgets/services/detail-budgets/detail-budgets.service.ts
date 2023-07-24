import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailBudget } from 'src/Entities';
import { CreateDetailBudgetDto } from 'src/budgets/dtos/CreateDetailBudget.dto';
import { UpdateDetailBudgetDto } from 'src/budgets/dtos/UpdateDetailBudget.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DetailBudgetsService {
    constructor(
        @InjectRepository(DetailBudget)
        private readonly detailBudgetRepository: Repository<DetailBudget>,
      ) {}


      async findAll(): Promise<DetailBudget[]> {
        return this.detailBudgetRepository.find();
      }
    
      async findOne(id: number): Promise<DetailBudget> {
        return this.detailBudgetRepository.findOneBy({detailBudgetId:id});
      }
    
      async create(createDetailBudgetDto: CreateDetailBudgetDto): Promise<DetailBudget> {
        const detailBudget = this.detailBudgetRepository.create(createDetailBudgetDto);
        return this.detailBudgetRepository.save(detailBudget);
      }
    
      async update(id: number, updateDetailBudgetDto: UpdateDetailBudgetDto): Promise<DetailBudget> {
        const detailBudget = await this.detailBudgetRepository.findOneBy({detailBudgetId:id});
        this.detailBudgetRepository.merge(detailBudget, updateDetailBudgetDto);
        return this.detailBudgetRepository.save(detailBudget);
      }
    
      async remove(id: number): Promise<void> {
        await this.detailBudgetRepository.delete(id);
      }

}
