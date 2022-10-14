import { Request, Response, Router } from 'express'
import { GameEntities } from './entities/game-entities'
import GameController from './game.controller'

const router = Router()

const gameController = new GameController()

router.get('/', async (req: Request, res: Response) => {
	const allGames = await gameController.getAll()
	return res.send(allGames)
})

router.get('/search/:id', async (req: Request, res: Response) => {
	const { id } = req.params
	const findGame = await gameController.getById(id)
	return res.json(findGame)
})

router.post('/create', async (req: Request, res: Response) => {
	const Game: GameEntities = req.body
	await gameController.create(Game)
	return res.redirect('/games')
})

router.put('/edit/:id', async (req: Request, res: Response) => {
	const { id } = req.params
	const game: GameEntities = req.body
	await gameController.update(id, game)
	const editado = await gameController.getById(id)
	return res.json(editado)
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
	const { id } = req.params
	await gameController.delete(id)
	return res.redirect('/games')
})

export default router
