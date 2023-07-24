import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Configuration } from 'src/Entities';
import { CreateConfigurationDto } from 'src/configurations/dtos/CreateConfiguration.dto';
import { UpdateConfigurationDto } from 'src/configurations/dtos/UpdateConfiguration.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigurationsService {
    constructor(
        @InjectRepository(Configuration)
        private readonly configurationRepository: Repository<Configuration>,
      ) {}

      async findOne(): Promise<Configuration> {   
        const listCompanies = await this.configurationRepository.find();   
        return listCompanies[0];
      }

      async create(createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
        const customer = this.configurationRepository.create(createConfigurationDto);
        return this.configurationRepository.save(customer);
      }
    
    
      async update(updateConfigurationDto: UpdateConfigurationDto): Promise<Configuration> {
        const configuration = await this.findOne();        
        this.configurationRepository.merge(configuration, updateConfigurationDto);        
        return this.configurationRepository.save(configuration);
      }
}
