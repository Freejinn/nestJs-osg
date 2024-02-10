import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillParent } from 'src/entities/parentSkill.entity';
import { SkillBadge } from 'src/entities/skillBadge.entity';
import { SkillPart } from 'src/entities/skillPart.entity';
import { GroupSkill } from 'src/entities/groupSkill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SkillParent, SkillBadge, SkillPart, GroupSkill])],
  controllers: [SkillController],
  providers: [SkillService],
})

export class SkillModule {}
