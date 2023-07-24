import { Module } from '@nestjs/common';
import { ConfigurationsService } from './services/configurations/configurations.service';
import { ConfigurationsController } from './controllers/configurations/configurations.controller';
import { Configuration } from 'src/Entities/configuration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Configuration])],
  providers: [ConfigurationsService],
  controllers: [ConfigurationsController]
})
export class ConfigurationsModule {}
