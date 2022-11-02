import { Router } from 'express'
import UsersController from './users.controller'

const usersRoute = Router()
const usersController = new UsersController()

usersRoute.get('/find/user', (req, res) => {
	usersController.getById(req, res)
})

usersRoute.post('/create', (req, res) => {
	usersController.create(req, res)
})

usersRoute.delete('/delete/:id', (req, res) => {
	usersController.delete(req, res)
})

export default usersRoute
