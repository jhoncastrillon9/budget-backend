import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/Entities';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { UpdateCustomerDto } from 'src/customers/dtos/UpdateCustomer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({customerId:id});
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async update(updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.customerRepository.findOneBy({customerId:updateCustomerDto.customerId});
    this.customerRepository.merge(customer, updateCustomerDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
