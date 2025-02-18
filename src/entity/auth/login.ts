import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";






@Entity()
export class Login {
    
    @PrimaryGeneratedColumn()
    id!:number;
    
    @Column({ type: "varchar" })
    username:string;

    @Column({ type: "varchar" })
    password:string;
}