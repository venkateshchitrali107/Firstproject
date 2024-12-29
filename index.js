const express = require("express")
require("dotenv").config()


const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello world")
})
app.get("/login", (req, res) => {
    res.send("<h1>Hello world<\h1>")
})
app.listen(port, () => {
    console.log(`listening to port : ${port}`);
})