import { LoginDao } from "dao/auth/loginDao";
import { autoInjectable } from "tsyringe";






@autoInjectable()
export class LoginLogic {
    constructor(
        private loginDao:LoginDao

    ){
        // super()
    }

    
}