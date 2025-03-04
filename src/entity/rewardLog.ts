import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  Relation,
} from "typeorm";
import { Moment } from "moment";
import { prizeType } from "./enum/prizeType";
import { Reward } from "./reward";

@Entity()
export class RewardLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  phone: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  rewardId: number;
  @ManyToOne("Reward","RewardLogs",{lazy:true}) 
  reward!:Relation<Promise<Reward>>

  @CreateDateColumn({ select: true, type: "timestamptz" })
  createdAt?: Moment;

  @CreateDateColumn({ select: true, type: "timestamptz" })
  EvaluationDate?: Date;

  @CreateDateColumn({ select: true, type: "timestamptz" })
  paymentDate?: Date;

  @UpdateDateColumn({ select: false, type: "timestamptz" })
  updatedAt?: Moment;
}
