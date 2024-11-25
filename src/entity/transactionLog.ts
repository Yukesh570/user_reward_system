import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, ManyToOne, Relation, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user';
import { TransactionType } from './enum/transactionType';
import { Moment } from 'moment';


@Entity()
export class TransactionLog {
    @PrimaryGeneratedColumn()
    id!:number;

    
    @Column({
        type: "enum",
        enum: TransactionType,
      })
      prizeType: TransactionType;

    @Column()
    email:string;

    @Column()
    Amount:number;

    @Column()
    typeoftransaction:string

    @ManyToOne("User","Transaction",{lazy:true})
    user!:Relation<Promise<User>>
     
    @ManyToOne("Reward","Transaction",{lazy:true})
    reward!:Relation<Promise<User>>

    @ManyToOne("RewardLog","Transaction",{lazy:true})
    rewardLog!:Relation<Promise<User>>
    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;
}