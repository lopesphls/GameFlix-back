import { PrismaClient } from '@prisma/client'
import { validate } from 'class-validator'
import ValidarCpf from '../utils/validarCpF'
import { UsersEntities } from './entities/users.entities'
import UsersValidation from './users.validation'
import { UsersDto } from './usersDto/users.dto'

export default class UsersService {
	private validarCpf = new ValidarCpf()

	private prisma = new PrismaClient()
	private userValidation = new UsersValidation()

	async getById() {
		return await this.prisma.users.findMany()
	}

	async create(createUserDto: UsersDto) {
		const { CPF, email, password }: UsersEntities = createUserDto

		this.userValidation.email = email
		this.userValidation.password = password
		this.userValidation.CPF = CPF
		const error = await validate(this.userValidation)
		if (error.length === 0) {
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
		return error
	}

	async delete(id: string) {
		return await this.prisma.users.delete({
			where: {
				id,
			},
		})
	}
}
