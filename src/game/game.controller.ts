import { Request, Response } from 'express'
import { GameEntities } from './entities/game.entities'
import GameService from './game.service'

export default class GameController {
	private gameService = new GameService()

	public async getAll(req: Request, res: Response) {
		const allGames = await this.gameService.getAll()
		return res.json(allGames)
	}

	public async getById(req: Request, res: Response) {
		const { id } = req.params
		const findGame = await this.gameService.getById(id)
		return res.json(findGame)
	}

	public async create(req: Request, res: Response) {
		const Game: GameEntities = req.body
		await this.gameService.create(Game)
		return res.redirect('ok')
	}

	public async update(req: Request, res: Response) {
		const { id } = req.params
		const game: GameEntities = req.body
		await this.gameService.update(id, game)
		const editado = await this.gameService.getById(id)
		return res.json(editado)
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params
		await this.gameService.delete(id)
		return res.redirect('/games')
	}
}
