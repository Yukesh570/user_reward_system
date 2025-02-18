import { AppDataSource } from "data-source";
import { TransactionDaoHelper } from "helper/dao";
import { singleton } from "tsyringe";





@singleton()
export class LoginDao {

    public repository= AppDataSource

}