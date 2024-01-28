import express from 'express'
import {authController} from '../controllers/auth.controller.js'
import verifyToken from '../middleware/verifyToken.js'

const controller = new authController()
const router = express.Router()

router.post('/login', (req, res) => {
    controller.login(req, res)
})
router.get('/protected', verifyToken, (req, res) => {
    controller.protected(req, res)
})

export {router as authRouter}