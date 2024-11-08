import { Entity, Column,PrimaryGeneratedColumn,BaseEntity } from 'typeorm'


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone:number;

    @Column()
    location:string

    @Column()
    gender:string

}