import express from 'express'
import productController from '../controllers/product.controller';

const router = express.Router()
const product = new productController
product.list

//list all
router.get('/products', (req, res) => {
    console.log('route to all products');
})

//list specific
router.get('/products/:id([0-9]*)', (req, res) => {
    const {id} = req.params
    console.log(`route to specific product details by id: ${id}`);
})

//create
router.post('/products', (req, res) => {
    const {id, title, price, image_url, description, roastlevel, weight, category_id } = req.body
    console.log('route to create product', req.body)
})

//update specific
router.put('/products', (req,res) => {
    const {id, title, price, image_url, description, roastlevel, weight, category_id } = req.body
    console.log('route to update specific product', req.body);
})

//delete specific
router.delete('/products', (req, res) => {
    const {id} = req.body
    console.log(`route to delete specific product from formbody: ${id}`);
})

export {router as productRouter}