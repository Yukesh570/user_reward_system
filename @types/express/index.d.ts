import { Login as login } from "src/entity/auth/login";



declare global{
    namespace Express {
        interface Request {
            user: login;
        }
    }
}