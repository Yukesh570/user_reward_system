import express, { Request, Response, Router } from "express";
import { initializeDB } from './db'
import { router } from './routes/routes'
const port=8000;

const app = express();

app.use('/',router)
app.get("/",(req: Request, res: Response)=>{
    res.send("helslso ssss");
});
app.get("/hi",(req: Request, res: Response)=>{
    res.send("hi sssswwetaa");
});

app.listen(port,async()=>{
    await initializeDB(),
    console.log(`listening on port ${port}`)
})
