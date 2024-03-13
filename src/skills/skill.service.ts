import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupSkill } from 'src/entities/groupSkill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(GroupSkill)
    private parentRepository: Repository<GroupSkill>,
  ) {}

  getSkills(): Promise<GroupSkill[]> {
    console.log('in service!');
    return this.parentRepository.find({
      order: {
          id: "ASC",
        parents: {
          id: 'ASC',
          badges: {
            id: "ASC",
            parts: {
              id: "ASC"
            }
          }
        },
      },
      relations: {
        parents: {
          badges: {
            parts: true,
          },
        },
      },
      
      
    });

    // return of(skillsConst).pipe(
    //   tap((response) => console.log('nestjs service: ', response)),
    // );
  }
}
