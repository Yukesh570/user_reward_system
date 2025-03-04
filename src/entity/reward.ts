import { 
    Entity, 
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    Relation,
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm'
import { User } from './user';
import { Moment } from "moment";
import { criteriaType } from './enum/rewardType';
import { prizeType } from './enum/prizeType';


@Entity()
export class Reward {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({ type: "varchar" })
    reward:string;

    @Column({
        type:"enum",
        enum:criteriaType
    })
    criteriaType:criteriaType

    @Column({
        type: "enum",
        enum: prizeType,
      })
      prizeType: prizeType;
      
    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;
}