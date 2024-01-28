import express from 'express'
import sequelize from '../config/sequelize.config.js'
import product from '../models/product.model.js'

const router = express.Router()

router.get('/init', async (req, res) => {
	try {
		await sequelize.sync()
		res.sendStatus(200)
	}
	catch(err) {
		res.send(err)
	}
})

export {router as initRouter}