import { Entity, Column,PrimaryGeneratedColumn,BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Moment } from 'moment';
import { prizeType } from './enum/prizeType';

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
        enum: prizeType,
      })
      prizeType: prizeType;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    meterReadingDate?: Date;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    paymentDate?: Date;

    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;

}