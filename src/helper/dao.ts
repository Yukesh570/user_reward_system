import { EntityManager, Repository } from "typeorm";



export class TransactionDaoHelper<T extends TransactionDaoHelper<any>>{
    public repository:Repository<any>;

    public withTransaction(manager:EntityManager):T {
        const obj = Object.create(this);
        obj.repository = manager.getRepository(this.repository.target);
        return obj
    }
}




