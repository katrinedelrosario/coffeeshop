import express from 'express'
import dotenv from "dotenv";
import { ProductRouter } from './routes/product.router.js';
import { initRouter } from './routes/init.router.js';
import { CategoryRouter } from './routes/category.router.js';
import { authRouter } from './routes/auth.router.js';
import { userRouter } from './routes/user.router.js';

dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', initRouter)
app.use('/api', ProductRouter)
app.use('/api', CategoryRouter)
app.use('/api', authRouter)
app.use('/api', userRouter)


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})



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

