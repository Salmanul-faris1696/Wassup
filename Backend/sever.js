import express from 'express'
// const express = require('express')
import dotenv from 'dotenv'
// const dotenv = require('dotenv')
const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
	//this root route http://localhost:5000
	res.send("Hello World!");
})


app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
