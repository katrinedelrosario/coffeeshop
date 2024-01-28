import express from 'express'
import {UserController} from '../controllers/user.controller.js'

const controller = new UserController()
const router = express.Router()

router.get('/users', (req, res) => {
    controller.list(req, res)
})
router.get('/users/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})
router.post('/users', (req, res) => {
    controller.create(req, res)
})
router.put('/users/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
router.delete('/users/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {router as userRouter}