import { of, Observable, tap } from 'rxjs';
import { SkillParent } from './models/skills.model';
import { skillsConst } from './constants/skills.const';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillService {
  getSkills(): Observable<SkillParent[]> {
    console.log('in service!');
    return of(skillsConst).pipe(
      tap((response) => console.log('nestjs service: ', response)),
    );
  }
}
