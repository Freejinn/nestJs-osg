import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class SkillParts {
  @PrimaryColumn()
  label: string;

  @Column()
  descrip: string;

  @Column()
  selected: boolean;
}