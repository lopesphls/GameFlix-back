import { CreateGameDto } from './createGameDto/createGame.dto'
import GameService from './game.service'

export default class GameController {
	private gameService = new GameService()

	public async getAll() {
		return await this.gameService.getAll()
	}

	public async getById(id: string) {
		return await this.gameService.getById(id)
	}

	public async create(createGame: CreateGameDto) {
		return await this.gameService.create(createGame)
	}

	public async update(id: string, game: CreateGameDto) {
		return await this.gameService.update(id, game)
	}

	public async delete(id: string) {
		return await this.gameService.delete(id)
	}
}
