import { Router } from 'express'
import GendersController from './genders.controller'

const gendersRoute = Router()
const gendersController = new GendersController()

gendersRoute.get('/', (req, res) => {
	gendersController.getAll(req, res)
})

export default gendersRoute
