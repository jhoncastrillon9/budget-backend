import { Module } from '@nestjs/common';
import { BudgetsService } from './services/budgets/budgets.service';
import { BudgetsController } from './controllers/budgets/budgets.controller';
import { Budget, DetailBudget } from 'src/Entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailBudgetsService } from './services/detail-budgets/detail-budgets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget]),TypeOrmModule.forFeature([DetailBudget])],
  providers: [BudgetsService, DetailBudgetsService],
  controllers: [BudgetsController]
})
export class BudgetsModule {}
