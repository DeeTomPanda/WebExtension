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

//middlewares

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes

console.log(process.env.API_KEY);
const url="https://www.websitecarbon.com/"

const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey:process.env.API_KEY});
const result = websiteCarbonCalculator.calculateByURL(url);

app.get('/',async(req,res)=>{
	/*
	const browser=await puppeteer.launch({
		headless:false,
		args: [
        	'--ignore-certificate-errors',
        	'--no-sandbox',
        	'--disable-setuid-sandbox',
        	'--disable-accelerated-2d-canvas',
        	'--disable-gpu'
            ]
	})
	//res.write(JSON.stringify("Browser launched"))
	const page=await browser.newPage()
	.then(async(page)=>{
		await page.goto(url,{waitUntil:'networkidle0'})
	})
	await browser.close();
	*/
	console.log(result)
	res.status(201).json("Hello user")}
)

app.listen(PORT,()=>console.log("Listening from 8888"))
