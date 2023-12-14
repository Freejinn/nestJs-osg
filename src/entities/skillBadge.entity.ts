import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SkillParts } from "./skillPart.entity";

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

  @OneToOne(()=>SkillParts)
  @JoinColumn()
  parts: SkillParts;
}