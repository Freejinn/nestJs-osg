import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SkillParent } from "./parentSkill.entity";

@Entity()
export class GroupSkill {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label: string;

    @Column()
    backgroundColor: string;

    @Column()
    pic:string;

    @Column()
    handbookUrl: string;

    @Column()
    motto: string;

    @OneToMany(() => SkillParent, (parent) => parent.group)
    parents: SkillParent[];


}