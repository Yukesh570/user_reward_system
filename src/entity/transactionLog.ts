import { Entity, Column,PrimaryGeneratedColumn,BaseEntity } from 'typeorm'


@Entity()
export class TransactionLog extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    type:string;

    @Column()
    email:string;

    @Column()
    Amount:number;

    @Column()
    typeoftransaction:string


}