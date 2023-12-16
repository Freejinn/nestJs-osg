import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SkillPart } from "./skillPart.entity";
import { SkillParent } from "./parentSkill.entity";

@Entity()
export class SkillBadge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgPth: string;

  @Column()
  label: string;

  @Column()
  progressPercentage: number;

  @ManyToOne(() => SkillParent, (skill) => skill.badges)
  skill: SkillParent;

  @OneToMany(() => SkillPart, (part) => part.badge)
  parts: SkillPart[];
}