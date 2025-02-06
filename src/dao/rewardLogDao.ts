import { AppDataSource } from "data-source"
import { TransactionDaoHelper } from "../helper/dao"
import { DeepPartial, Repository, UpdateResult } from "typeorm"
import { singleton } from "tsyringe";
import { RewardLog } from "entity/rewardLog";



@singleton()
export class RewardLogDao extends TransactionDaoHelper<RewardLogDao>{
    public override repository= AppDataSource.getRepository(RewardLog);

    create(rewardLog:Omit<RewardLog,"id"|"reward">):Promise<RewardLog>{
        return this.repository.save(this.repository.create(rewardLog))
    }

    update(id:number,rewardLog:DeepPartial<RewardLog>):Promise<UpdateResult>{
        return this.repository.update({id},rewardLog)
    }

    findById(id:number):Promise<RewardLog|null>{
        if(!id) return Promise.resolve(null);
        return this.repository.findOne({
            where:{id:id},
        })
    }
    

    delete(id:number){
        return this.repository.delete({id})
    }
}