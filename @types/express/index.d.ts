import { Login } from "entity/auth/login";



declare global{
    namespace Express {
        interface Request {
            user: Login;
        }
    }
}