import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RewardType } from './enum/rewardType';
import { Moment } from 'moment';

@Entity()
export class RewardLog {

    
    @PrimaryGeneratedColumn()
    id!:number;

    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone:number;

    @Column({
        type: "enum",
        enum: RewardType,
      })
      rewardType: RewardType;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;

    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;

}