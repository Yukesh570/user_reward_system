import { AppDataSource } from "data-source";
import { User } from "../entity/user";
import { TransactionDaoHelper } from "../helper/dao";
import { DeepPartial, Repository, UpdateResult } from "typeorm";
import { singleton } from "tsyringe";
import { plainToInstance } from "class-transformer";

@singleton()
export class UserDao {
  public repository = AppDataSource.getRepository(User);

  create(user: Omit<User, "id" | "reward" | "user">): Promise<User> {
    return this.repository.save(this.repository.create(user));
  }

  update(id: number, user: DeepPartial<User>): Promise<UpdateResult> {
    return this.repository.update({ id }, user);
  }

  findById(id: number): Promise<User | null> {
    if (!id) return Promise.resolve(null);
    return this.repository.findOne({
      where: { id: id },
      relations: ["reward"],
    });
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }
  async updateAndReturn(id: number, user: DeepPartial<User>): Promise<User> {
    const data = await this.repository
      .createQueryBuilder()
      .update(user)
      .where("id = :id", { id })
      .returning("*")
      .execute();
    return plainToInstance(User, data.raw[0]);
  }
}
