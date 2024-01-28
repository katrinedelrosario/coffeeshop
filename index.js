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
app.use(express.urlencoded({extended:true}))

app.use(productRouter)
app.use(categoryRouter)

app.use(express.json())

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', )
// })

const port = (process.env.PORT || 4000)
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})


//pages
app.get("/", (req, res) => {
    res.send('frontpage')
})

app.get("/products", (req, res) => {
    res.send('products🛍️')
})

app.use((req, res, next) =>{
    res.status(404).send('site not found😕')
})


