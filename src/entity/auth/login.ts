import { userType } from "entity/enum/userType";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  username: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "enum", enum: userType })
  userType: userType;
}
