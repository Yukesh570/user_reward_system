import { DeepPartial, Repository, UpdateResult } from "typeorm"
import { singleton } from "tsyringe";
import { Reward } from "entity/reward";
import { AppDataSource } from "data-source";



@singleton()
export class RewardDao{
    public repository= AppDataSource.getRepository(Reward);

    create(reward:Omit<Reward,"id">):Promise<Reward>{
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