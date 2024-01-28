import express from 'express'
import {CategoryController} from '../controllers/category.controller.js'

const controller = new CategoryController()
const router = express.Router();
//list all
router.get('/categories', controller.list);

//list specific
router.get('/categories/:id([0-9]*)', controller.details);

//create
router.post('/categories', controller.create);

//update specific
router.put('/categories/:id([0-9]*)', controller.update);

//delete specific
router.delete('/categories/:id([0-9]*)', controller.delete)

export {router as CategoryRouter}