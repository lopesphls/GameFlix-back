import { Router } from 'express'
import GameController from './game.controller'

const gameRoute = Router()

const gameController = new GameController()

gameRoute.get('/', (req, res) => {
	gameController.getAll(req, res)
})

gameRoute.get('/:id', (req, res) => {
	gameController.getById(req, res)
})

gameRoute.post('/create', (req, res) => {
	gameController.create(req, res)
})

gameRoute.put('/edit/:id', (req, res) => {
	gameController.update(req, res)
})

gameRoute.delete('/delete/:id', (req, res) => {
	gameController.delete(req, res)
})

export default gameRoute
