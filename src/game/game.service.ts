import { PrismaClient } from '@prisma/client'
import { CreateGameDto } from './createGameDto/createGame.dto'
import { GameEntities } from './entities/game-entities'

export default class GameService {
	private prisma = new PrismaClient()

	async getAll() {
		return await this.prisma.game.findMany()
	}

	async getById(id: string) {
		return await this.prisma.game.findMany({
			where: {
				id,
			},
		})
	}

	async create(createGame: CreateGameDto) {
		const game: GameEntities = createGame

		return await this.prisma.game.create({
			data: game,
		})
	}

	async update(id: string, game: CreateGameDto) {
		const {
			title,
			coverImageUrl,
			description,
			year,
			gameplayYouTubeUrl,
			trailerYouTubeUrl,
		} = game
		return await this.prisma.game.update({
			data: {
				title,
				coverImageUrl,
				description,
				year,
				gameplayYouTubeUrl,
				trailerYouTubeUrl,
			},
			where: {
				id,
			},
		})
	}

	async delete(id: string) {
		return await this.prisma.game.delete({
			where: {
				id,
			},
		})
	}
}
