import { verifyJwt, verifyToken } from "auth/login";
import { Request,Response,NextFunction } from "express";


export function protect(){
return async (req: Request, res: Response, next: NextFunction)=>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token==null)
    return res.status(400).json("token not provided");
  verifyToken(token)
  .then(async(data)=>{
    req.
    next();
  })

}
}