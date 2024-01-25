import { Controller, Get } from '@nestjs/common';
import { SkillParent } from './models/skills.model';
import { SkillService } from './skill.service';
import { Observable, tap } from 'rxjs';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  getSkills() {
    console.log('in controller!');
    
    const skills = this.skillService.getSkills()
    return skills
      
    // .pipe(tap((response) => console.log('nestjs controller: ', response)));
  }
}
