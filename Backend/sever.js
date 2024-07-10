import express from 'express' // const express = require('express')
import dotenv from 'dotenv'  // const dotenv = require('dotenv')

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './database/connectToMongoDb.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // this for to parse the income request with JSON playloads (from req.body) 
dotenv.config()

app.use("/api/auth", authRoutes)
app.use("/api/message" , messageRoutes)


// app.get("/", (req, res) => {
// 	//this root route http://localhost:5000
// 	res.send("Hello World!");
// })

app.listen(PORT, () =>{
	connectToMongoDB()
	console.log(`Sever is running on port 📡${PORT}`)
});
