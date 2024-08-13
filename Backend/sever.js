import express from 'express' // const express = require('express')
import dotenv from 'dotenv'  // const dotenv = require('dotenv')
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import usersRoutes from './routes/users.routes.js'


import connectToMongoDB from './database/connectToMongoDB.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
app.use(express.json()) // this for to parse the income request with JSON playloads (from req.body) 
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message" , messageRoutes)
app.use("/api/users" , usersRoutes)


// app.get("/", (req, res) => {
// 	//this root route http://localhost:5000
// 	res.send("Hello World!");
// })

app.listen(PORT, () =>{
	connectToMongoDB()
	console.log(`Sever is running on port 📡${PORT}`)
});
