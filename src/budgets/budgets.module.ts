import { Module } from '@nestjs/common';
import { BudgetsService } from './services/budgets/budgets.service';
import { BudgetsController } from './controllers/budgets/budgets.controller';

@Module({
  providers: [BudgetsService],
  controllers: [BudgetsController]
})
export class BudgetsModule {}
