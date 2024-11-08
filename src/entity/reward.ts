import { Entity, Column,PrimaryGeneratedColumn,BaseEntity } from 'typeorm'


@Entity()
export class Reward extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    reward:string;

    @Column()
    email:string;

    @Column()
    Amount:number;


}