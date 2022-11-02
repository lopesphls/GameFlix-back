import { PrismaClient } from '@prisma/client'

export default class GendersService {
	private prisma = new PrismaClient()

	public async getAll() {
		return await this.prisma.genders.findMany()
	}
}
