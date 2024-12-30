import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import connectDB from './db/index.js'
import app from './app.js'
const port = process.env.PORT

connectDB()
    .then(() => {
        app.get("/", (req, res) => {
            res.send("Hello world")
        })
        app.listen(port, () => {
            console.log(`listening to port : ${port}`);
        })
    })
    .catch((error) => {
        console.log(`Error connecting to database`, error);
        process.exit(1);
    })

