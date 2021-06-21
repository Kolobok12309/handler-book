import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import {
  BreedGroupDto,
  CreateBreedGroupDto,
  UpdateBreedGroupDto,
} from '../dto';

import { BreedGroupEntity } from '../entities';

@Injectable()
export class BreedGroupService {
  constructor(
    @InjectRepository(BreedGroupEntity)
    private readonly repo: Repository<BreedGroupEntity>,
  ) {}

  async add(createBreedGroupDto: CreateBreedGroupDto): Promise<BreedGroupDto> {
    const breedGroupRaw = await this.repo.create(createBreedGroupDto);

    return this.repo.save(breedGroupRaw);
  }

  async getById(
    id: number,
    params: FindOneOptions<BreedGroupEntity> = {},
  ): Promise<BreedGroupDto> {
    return this.repo.findOne(id, params);
  }

  async getAll(): Promise<BreedGroupDto[]> {
    return this.repo.find();
  }

  async update(
    id: number,
    updateBreedGroupDto: UpdateBreedGroupDto,
  ): Promise<BreedGroupDto> {
    const oldBreed = await this.getById(id);

    if (!oldBreed) throw new NotFoundException('Breed group not found');

    const updatedBreed = await this.repo.save(updateBreedGroupDto);

    return this.repo.merge(oldBreed, updatedBreed);
  }

  async del(id: number): Promise<boolean> {
    const { affected } = await this.repo.delete(id);

    if (!affected) throw new NotFoundException('Breed group not found');

    return true;
  }
}
