import { Router } from 'express'
import UsersController from './users.controller'

const usersRoute = Router()
const usersController = new UsersController()

usersRoute.get('/findUser', (req, res) => {
	usersController.getById(req, res)
})

usersRoute.post('/createUser', (req, res) => {
	usersController.create(req, res)
})

usersRoute.delete('/deleteUser/:id', (req, res) => {
	usersController.delete(req, res)
})

export default usersRoute
