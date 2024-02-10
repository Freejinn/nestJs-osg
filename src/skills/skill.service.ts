import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillParent } from 'src/entities/parentSkill.entity';
import { Repository } from 'typeorm';
import { ScoutGroup, SkillBadge } from './models/skills.model';
import { GroupSkill } from 'src/entities/groupSkill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(GroupSkill)
    private parentRepository: Repository<GroupSkill>,
    ) {}
  
  
  getSkills(): Promise<GroupSkill[]> {
    console.log('in service!');
    return this.parentRepository.find();


    // return of(skillsConst).pipe(
    //   tap((response) => console.log('nestjs service: ', response)),
    // );
  }
}
