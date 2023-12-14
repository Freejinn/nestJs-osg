import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { SkillBadge } from './skillBadge.entity';

@Entity()
export class SkillParent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  backgroundColor: string;

  @OneToOne(()=>SkillBadge)
  @JoinColumn()
  skills: SkillBadge;
}

