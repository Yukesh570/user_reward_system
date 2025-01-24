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
import { rewardType } from './enum/rewardType';


@Entity()
export class Reward {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({ type: "varchar" })
    reward:string;

    @Column({ type: "varchar" })
    email:string;

    @Column({
        type:"enum",
        enum:rewardType
    })
    rewardType:rewardType


    @Column({ type: "integer" })
    amount:number;

    @Column({type:"integer",nullable:true,unique:true})
    userId:number;
    @ManyToOne("User","Reward",{lazy:true})
    user!:Relation<Promise<User>>;

    @CreateDateColumn({ select: true, type: "timestamptz"})
    createdAt?: Moment;
  
    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updatedAt?: Moment;
}