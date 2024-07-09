import express from 'express' // const express = require('express')
import dotenv from 'dotenv'  // const dotenv = require('dotenv')
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './database/connectToMongoDb.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
	//this root route http://localhost:5000
	res.send("Hello World!");
})

app.use("/api/auth" , authRoutes)

app.listen(PORT, () =>{
	connectToMongoDB()
	console.log(`Sever is running on port 📡${PORT}`)
});
