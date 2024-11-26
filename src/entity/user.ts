import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, OneToMany, Relation, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Reward } from './reward';
import { Moment } from 'moment';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!:number;

    
    @Column({ type: "varchar" })
    name:string;

    @Column({ type: "varchar" })
    email:string;

    @Column({ type: "varchar" })
    phone:string;

    @Column({ type: "varchar" })
    location:string

    @OneToMany("Reward","User",{lazy:true})
    reward!:Relation<Promise<Reward[]>>;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;

}