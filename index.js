import express from 'express'
import dotenv from "dotenv";
import db from './db.config.js'

db.query(`SELECT id,firstname FROM user` , (err, result) => {
    console.log(result)

  });

const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("welcome to my API")
})

app.get("/contact", (req, res) => {
    res.send()
})

app.get("/api", (req, res) => {
   db.query(`SELECT id,firstname FROM user` , (err, result) => {
    if (err) {
        console.log(err)
    } else {
        res.json(result)
    }
   })

})

app.listen(port, () => {
    console.log("server runs on port port 5500: http://localhost:5500/")
})