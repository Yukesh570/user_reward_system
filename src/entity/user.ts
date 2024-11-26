import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, OneToMany, Relation, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Reward } from './reward';
import { Moment } from 'moment';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!:number;

    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone:string;

    @Column()
    location:string

    @OneToMany("Reward","User",{lazy:true})
    reward!:Relation<Promise<Reward[]>>;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;

}