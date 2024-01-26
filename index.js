import express from 'express'
import dotenv from "dotenv";
import db from './config/db.config.js'
import { productRouter } from './routes/product.router.js';
import { categoryRouter } from './routes/category.router.js';


// db.query(`SELECT id,firstname FROM user` , (err, result) => {
//     console.log(result)

//   });
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("welcome to my API")
})

app.get("/contact", (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log("server runs on port port 5500: http://localhost:5500/")
})

app.use(productRouter)
app.use(categoryRouter)