import express from 'express'
import categoryController from '../controllers/category.controller';

const app = express();
const router = express.Router()
const category = new categoryController
category.list
//list all
router.get('/categories', (req, res) => {
    console.log('route to all categories');
})

//list specific
router.get('/categories/:id([0-9]*)', (req, res) => {
    const {id} = req.params
    console.log('route to category details');
})

//create
router.post('/categories', (req, res) => {
    const {title} = req.body
    console.log('route to create category');
})

//update specific
router.put('/categories', (req,res) => {
    const {id, title } = req.body
    console.log('route to update specific category', req.body);
})

//delete specific
router.delete('/categories', (req, res) => {
    const {id} = req.body
    console.log(`route to delete specific category from formbody: ${id}`);
})

//not found
app.use((req, res, next) => {
    res.status(404).send('page not found😕')
})

export {router as categoryRouter}