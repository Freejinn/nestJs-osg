import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true, nullable:false})
    username:string;

    @Column({nullable:false, unique:true})
    email:string;

    @Column({nullable:false})
    password:string;
    
}