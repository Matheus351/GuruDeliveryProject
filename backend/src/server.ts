import express,{ NextFunction, Request, response, Response } from "express";

import { router } from "./routes";
import cors from 'cors';

const app = express()



app.use(express.json())
app.use(cors())

app.use(router)


app.listen(3003, ()=>console.log('Servidor rodando'))