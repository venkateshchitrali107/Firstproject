import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json({
    limit: '16kb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

app.use(express.static('public'))

app.use(cookieParser())

app.on('error', (error) => {
    console.log(`Error on express App`, error);
    throw error;
})

//routes import

import userRouter from "./routes/user.route.js"

//routes declartion

app.use("/api/v1/users", userRouter);

export default app