import express from 'express'
import dotenv from "dotenv";
import { productRouter } from './routes/product.router.js';
import { categoryRouter } from './routes/category.router.js';
import { initRouter } from './routes/init.router.js';

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', initRouter)
app.use('/api', productRouter)
app.use('/api', categoryRouter)


// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', )
// })


//pages
app.get("/", (req, res) => {
    res.send('frontpage')
})

app.use((req, res, next) =>{
    res.status(404).send('site not found😕')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})

