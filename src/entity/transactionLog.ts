import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";
import { TransactionType } from "./enum/transactionType";
import { Moment } from "moment";
import { RewardLog } from "./rewardLog";

@Entity()
export class TransactionLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  transactionType: TransactionType;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  amount: number;

  @Column({ type: "integer", nullable: true, unique: true })
  userId: number;
  @ManyToOne("User", "Transaction", { lazy: true })
  user!: Relation<Promise<User>>;

  @Column({ type: "integer", nullable: true })
  rewardId: number;
  @ManyToOne("Reward", "Transaction", { lazy: true })
  reward!: Relation<Promise<User>>;

  @Column({ type: "integer", nullable: true })
  rewardLogId: number;
  @ManyToOne("RewardLog", "Transactions", { lazy: true })
  rewardLog!: Relation<Promise<RewardLog>>;

  @CreateDateColumn({ select: true, type: "timestamptz" })
  createdAt?: Moment;

  @UpdateDateColumn({ select: false, type: "timestamptz" })
  updatedAt?: Moment;
}
