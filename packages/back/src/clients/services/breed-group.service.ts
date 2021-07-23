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

  add(createDto: CreateBreedGroupDto): Promise<BreedGroupDto> {
    const raw = this.repo.create(createDto);

    return this.repo.save(raw);
  }

  async getById(
    id: number,
    params: FindOneOptions<BreedGroupEntity> = {},
  ): Promise<BreedGroupDto> {
    const breedGroup = await this.repo.findOne(id, params);

    if (!breedGroup) throw new NotFoundException('Breed group not found');

    return breedGroup;
  }

  getAll(): Promise<BreedGroupDto[]> {
    return this.repo.find();
  }

  async update(
    id: number,
    updateDto: UpdateBreedGroupDto,
  ): Promise<BreedGroupDto> {
    const old = await this.getById(id);
    const updated = await this.repo.save(updateDto);

    return this.repo.merge(old, updated);
  }

  async del(id: number): Promise<boolean> {
    const { affected } = await this.repo.delete(id);

    if (!affected) throw new NotFoundException('Breed group not found');

    return true;
  }
}
