import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import { BreedDto, CreateBreedDto, UpdateBreedDto } from '../dto';

import { BreedEntity } from '../entities';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(BreedEntity)
    private readonly repo: Repository<BreedEntity>,
  ) {}

  add(createDto: CreateBreedDto): Promise<BreedDto> {
    const raw = this.repo.create(createDto);

    return this.repo.save(raw);
  }

  async getById(
    id: number,
    params: FindOneOptions<BreedEntity> = {},
  ): Promise<BreedDto> {
    const breed = await this.repo.findOne(id, params);

    if (!breed) throw new NotFoundException('Breed not found');

    return breed;
  }

  getAll(): Promise<BreedDto[]> {
    return this.repo.find();
  }

  async update(id: number, updateDto: UpdateBreedDto): Promise<BreedDto> {
    const old = await this.repo.findOne(id);
    const updated = await this.repo.save(updateDto);

    return this.repo.merge(old, updated);
  }

  async del(id: number): Promise<boolean> {
    const { affected } = await this.repo.delete(id);

    if (!affected) throw new NotFoundException('Breed not found');

    return true;
  }
}
