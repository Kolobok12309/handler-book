import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import { SubBreedDto, CreateSubBreedDto, UpdateSubBreedDto } from '../dto';

import { SubBreedEntity } from '../entities';

@Injectable()
export class SubBreedService {
  constructor(
    @InjectRepository(SubBreedEntity)
    private readonly repo: Repository<SubBreedEntity>,
  ) {}

  add(createDto: CreateSubBreedDto): Promise<SubBreedDto> {
    const raw = this.repo.create(createDto);

    return this.repo.save(raw);
  }

  async getById(
    id: number,
    params: FindOneOptions<SubBreedEntity> = {},
  ): Promise<SubBreedDto> {
    const subBreed = await this.repo.findOne(id, params);

    if (!subBreed) throw new NotFoundException('Sub breed not found');

    return subBreed;
  }

  getAll(): Promise<SubBreedDto[]> {
    return this.repo.find();
  }

  async update(id: number, updateDto: UpdateSubBreedDto): Promise<SubBreedDto> {
    const old = await this.repo.findOne(id);
    const updated = await this.repo.save({ id, ...updateDto });

    return this.repo.merge(old, updated);
  }

  async del(id: number): Promise<boolean> {
    const { affected } = await this.repo.delete(id);

    if (!affected) throw new NotFoundException('Sub breed not found');

    return true;
  }
}
