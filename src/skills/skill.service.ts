import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillParent } from 'src/entities/parentSkill.entity';
import { SkillBadge } from 'src/entities/skillBadge.entity';
import { SkillPart } from 'src/entities/skillPart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillParent)
    private parentRepository: Repository<SkillParent>,
    ) {}
  
  
  getSkills(): Promise<SkillParent[]> {
    console.log('in service!');
    return this.parentRepository.find();


    // return of(skillsConst).pipe(
    //   tap((response) => console.log('nestjs service: ', response)),
    // );
  }
}
