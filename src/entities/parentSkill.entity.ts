import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillBadge } from './skillBadge.entity';

@Entity()
export class SkillParent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  backgroundColor: string;

  @OneToMany(() => SkillBadge, (badge) => badge.skill)
  badges: SkillBadge[];
}

