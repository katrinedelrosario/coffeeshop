import express from 'express'
import {ProductController} from '../controllers/product.controller.js';

const controller = new ProductController()
const router = express.Router()



//list all
router.get('/products', controller.list);

//list specific
router.get('/products/:id([0-9]*)', controller.details);


//create
router.post('/products', controller.create);

//update specific
router.put('/products/:id([0-9]*)', controller.update);

//delete specific
router.delete('/products/:id([0-9]*)', controller.delete);

export {router as ProductRouter}