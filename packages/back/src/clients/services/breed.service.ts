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

  async add(createBreedDto: CreateBreedDto): Promise<BreedDto> {
    const breedRaw = await this.repo.create(createBreedDto);

    return this.repo.save(breedRaw);
  }

  async getById(
    id: number,
    params: FindOneOptions<BreedEntity> = {},
  ): Promise<BreedDto> {
    return this.repo.findOne(id, params);
  }

  async getAll(): Promise<BreedDto[]> {
    return this.repo.find();
  }

  async update(id: number, updateBreedDto: UpdateBreedDto): Promise<BreedDto> {
    const oldBreed = await this.repo.findOne(id);

    if (!oldBreed) throw new NotFoundException('Breed not found');

    const updatedBreed = await this.repo.save(updateBreedDto);

    return this.repo.merge(oldBreed, updatedBreed);
  }

  async del(id: number): Promise<boolean> {
    const { affected } = await this.repo.delete(id);

    if (!affected) throw new NotFoundException('Breed not found');

    return true;
  }
}
