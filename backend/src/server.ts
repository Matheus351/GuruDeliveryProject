
import express from "express";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors)


app.use((request, response)=>{
    return response.json({delivery:'guru delivery'})
})

app.listen(3003,()=>console.log('Servidor rodando em:http://localhost:3003'))