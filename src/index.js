import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import express from 'express'


import connectDB from './db/index.js'

const app = express()
const port = process.env.PORT

connectDB()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
})