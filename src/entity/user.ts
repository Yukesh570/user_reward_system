import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, OneToMany, Relation, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { Reward } from './reward';
import { Moment } from 'moment';
import { Login } from './auth/login';


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

    @Column({type:"integer",nullable:true})
    userId:number;
    @ManyToOne("Login","Users",{lazy:true})
    user!:Relation<Promise<Login>>
    


    @OneToMany("Reward","User",{lazy:true})
    reward!:Relation<Promise<Reward[]>>;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;

}