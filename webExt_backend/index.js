import express from 'express';
import cors from 'cors';
	
//variables

const PORT=8888
const app=express()

//middlewares
//
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes

app.get('*',(req,res)=>res.status(201).json("Hello user"))

app.listen(PORT,()=>console.log("Listening from 8888"))
