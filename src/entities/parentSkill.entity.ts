import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillBadge } from './skillBadge.entity';
import { GroupSkill } from './groupSkill.entity';

@Entity()
export class SkillParent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  backgroundColor: string;

  @ManyToOne(() => GroupSkill, (group)=>group.parents)
  group: GroupSkill[];

  @OneToMany(() => SkillBadge, (badge) => badge.skill)
  badges: SkillBadge[];
}

