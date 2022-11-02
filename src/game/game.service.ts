import { PrismaClient } from '@prisma/client'
import { GameEntities } from './entities/game.entities'
import { GameDto } from './gameDto/game.dto'

export default class GameService {
	private prisma = new PrismaClient()

	public async getAll() {
		return await this.prisma.games.findMany()
	}

	public async getById(id: string) {
		return await this.prisma.games.findMany({
			where: {
				id,
			},
		})
	}

	public async create(createGame: GameDto) {
		const game: GameEntities = createGame
		return await this.prisma.games.create({
			data: game,
		})
	}

	public async update(id: string, game: GameDto) {
		const {
			name,
			coverImageUrl,
			description,
			favorite,
			year,
			gameplayYouTubeUrl,
			trailerYouTubeUrl,
		} = game
		return await this.prisma.games.update({
			data: {
				name,
				coverImageUrl,
				description,
				year,
				favorite,
				gameplayYouTubeUrl,
				trailerYouTubeUrl,
			},
			where: {
				id,
			},
		})
	}

	public async delete(id: string) {
		return await this.prisma.games.delete({
			where: {
				id,
			},
		})
	}
}
