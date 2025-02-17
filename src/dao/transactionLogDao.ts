import { AppDataSource } from "data-source"
import { User } from "entity/user"
import { TransactionDaoHelper } from "helper/dao"
import { DeepPartial, Repository, UpdateResult } from "typeorm"
import { singleton } from "tsyringe";
import { TransactionLog } from "entity/transactionLog";



@singleton()
export class TransactionLogDao extends TransactionDaoHelper<TransactionLogDao>{
    public override repository= AppDataSource.getRepository(TransactionLog);

    create(transactionLog:Omit<TransactionLog,"id"|"reward"|"user"|"rewardLog">):Promise<TransactionLog>{
        return this.repository.save(this.repository.create(transactionLog))
    }

    update(id:number,transactionLog:DeepPartial<TransactionLog>):Promise<UpdateResult>{
        return this.repository.update({id},transactionLog)
    }

    findById(id:number):Promise<TransactionLog|null>{
        if(!id) return Promise.resolve(null);
        return this.repository.findOne({
            where:{id:id},
            relations:["reward","user"]

        })
    }
    

    delete(id:number){
        return this.repository.delete({id})
    }
}