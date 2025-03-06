import { Login as login } from "entity/auth/login";



declare global{
    namespace Express {
        interface Request {
            user: login;
        }
    }
}