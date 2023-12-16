import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SkillBadge } from "./skillBadge.entity";

@Entity()
export class SkillPart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  descrip: string;

  @Column()
  selected: boolean;

  @ManyToOne(() => SkillBadge, (badge) => badge.parts)
  badge: SkillBadge;
}