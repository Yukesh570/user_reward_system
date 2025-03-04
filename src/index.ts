import express, { Request, Response, Router } from "express";
import { initializeDB } from "./db";
import { router } from "./routes/routes";
const port = 8000;

const app = express();
app.use(express.json()); // This should be before any routes

app.use("/api", router);
app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(port, async () => {
  await initializeDB(), console.log(`listening on port ${port}`);
});
