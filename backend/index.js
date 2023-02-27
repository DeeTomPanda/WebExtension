import express from 'express';
import cors from 'cors';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';
import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator'

//variables

const PORT=8888
const app=express()
dotenv.config()

const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey:process.env.API_KEY});

//middlewares

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes

app.post('*',async(req,res)=>{
	console.log("Helllo")
	const { URL }=await req.body
	console.log(URL)
        const result = await websiteCarbonCalculator.calculateByURL(URL);
	console.log(result)
	res.status(201).json(result)}
)

app.get('*',(req,res)=>{
	console.log("Hello")
	res.status(201).send("Nothing Here!")}
)

app.listen(PORT,()=>console.log("Listening from 8888"))
