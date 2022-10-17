import { PrismaClient } from '@prisma/client'
import { ProfilesDto } from './profilesDto/profiles.dto'

export default class ProfilesService {
	private prisma = new PrismaClient()

	public async getAll() {
		return await this.prisma.profiles.findMany()
	}

	public async getById(id: string) {
		return await this.prisma.profiles.findUnique({
			where: {
				id,
			},
		})
	}

	public async create(createProfileDto: ProfilesDto, id: string) {
		const { nickname, image } = createProfileDto
		return await this.prisma.profiles.create({
			data: {
				nickname,
				image,
				usersId: id,
			},
		})
	}

	public async delete(id: string) {
		return await this.prisma.profiles.delete({
			where: {
				id,
			},
		})
	}
}
