import { AppDataSource } from "../data-source"
import { TransactionDaoHelper } from "../helper/dao"
import { DeepPartial, Repository, UpdateResult } from "typeorm"
import { singleton } from "tsyringe";
import { Reward } from "../entity/reward";



@singleton()
export class RewardDao extends TransactionDaoHelper<RewardDao>{
    public override repository= AppDataSource.getRepository(Reward);

    create(reward:Omit<Reward,"id"|"user">):Promise<Reward>{
        return this.repository.save(this.repository.create(reward))
    }

    update(id:number,reward:DeepPartial<Reward>):Promise<UpdateResult>{
        return this.repository.update({id},reward)
    }

    findById(id:number):Promise<Reward|null>{
        if(!id) return Promise.resolve(null);
        return this.repository.findOne({
            where:{id:id},
            relations:["user"]
        })
    }

    delete(id:number){
        return this.repository.delete({id})
    }
}