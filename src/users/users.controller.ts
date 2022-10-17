import { Request, Response } from 'express'
import UsersService from './users.service'
import { UsersDto } from './usersDto/users.dto'

export default class UsersController {
	private usersService = new UsersService()

	public async getById(req: Request, res: Response) {
		const user = await this.usersService.getById()
		return res.json(user)
	}

	public async create(req: Request, res: Response) {
		try {
			const createUser: UsersDto = req.body
			await this.usersService.create(createUser)
			return res.json('ok').status(201)
		} catch {}
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params
		await this.usersService.delete(id)
		return res.json('ok')
	}
}
