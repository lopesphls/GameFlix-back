import { Request, Response } from 'express'
import GendersService from './genders.service'

export default class GendersController {
	private gendersService = new GendersService()

	public async getAll(req: Request, res: Response) {
		const gender = await this.gendersService.getAll()
		return res.json(gender)
	}
}
