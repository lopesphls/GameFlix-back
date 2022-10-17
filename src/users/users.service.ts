import { PrismaClient } from '@prisma/client'
import ValidarCpf from '../utils/validarCpF'
import { UsersEntities } from './entities/users.entities'
import { UsersDto } from './usersDto/users.dto'

export default class UsersService {
	private validarCpf = new ValidarCpf()

	private prisma = new PrismaClient()

	async getById() {
		return await this.prisma.users.findMany()
	}

	async create(createUserDto: UsersDto) {
		const { CPF } = createUserDto
		const cpf = await this.validarCpf.Validar(CPF)
		if (cpf) {
			const user: UsersEntities = createUserDto
			return await this.prisma.users.create({
				data: user,
			})
		} else {
			return 'CPF invalido'
		}
	}

	async delete(id: string) {
		return await this.prisma.profiles.delete({
			where: {
				id,
			},
		})
	}
}
