import { Module } from '@nestjs/common';
import { ConfigurationsService } from './services/configurations/configurations.service';
import { ConfigurationsController } from './controllers/configurations/configurations.controller';

@Module({
  providers: [ConfigurationsService],
  controllers: [ConfigurationsController]
})
export class ConfigurationsModule {}
