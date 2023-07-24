import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {PassportModule} from '@nestjs/passport'
import { Configuration, Customer } from 'src/Entities';
import { UpdateConfigurationDto } from 'src/configurations/dtos/UpdateConfiguration.dto';
import { ConfigurationsService } from 'src/configurations/services/configurations/configurations.service';
import { CreateConfigurationDto } from 'src/configurations/dtos/CreateConfiguration.dto';


@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationService: ConfigurationsService) {}

  
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findOne(): Promise<Configuration> {
    return this.configurationService.findOne();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()    
  async create(@Body() createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    return this.configurationService.create(createConfigurationDto);
  }
  
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put()
  async update(@Body() updateConfigurationDto: UpdateConfigurationDto): Promise<Configuration> {
    return this.configurationService.update(updateConfigurationDto);
  }
}
