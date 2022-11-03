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
			const createUserDto: UsersDto = req.body
			const user = await this.usersService.create(createUserDto)
			return res.json(user)
		} catch (error) {
			return res.json(error)
		}
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params
		await this.usersService.delete(id)
		return res.json('ok')
	}
}
