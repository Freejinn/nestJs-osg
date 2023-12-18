import { Controller, Get } from '@nestjs/common';
import { SkillParent } from './models/skills.model';
import { SkillService } from './skill.service';
import { Observable, tap } from 'rxjs';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  getSkills(): Observable<SkillParent[]> {
    console.log('in controller!');
    return this.skillService
      .getSkills()
      .pipe(tap((response) => console.log('nestjs controller: ', response)));
  }
}
