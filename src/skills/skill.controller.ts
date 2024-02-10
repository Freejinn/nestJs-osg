import { Controller, Get } from '@nestjs/common';
import { SkillService } from './skill.service';

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

