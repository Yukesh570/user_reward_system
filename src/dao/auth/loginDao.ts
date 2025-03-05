import { AppDataSource } from "../../data-source";
import { Login } from "../../entity/auth/login";
import { singleton } from "tsyringe";
import { DeepPartial, UpdateResult } from "typeorm";

@singleton()
export class LoginDao {
  public repository = AppDataSource.getRepository(Login);

  create(login: Omit<Login, "id">): Promise<Login> {
    return this.repository.save(this.repository.create(login));
  }

  update(id: number, user: DeepPartial<Login>): Promise<UpdateResult> {
    return this.repository.update({ id }, user);
  }
}
