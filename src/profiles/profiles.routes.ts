import { Request, Response, Router } from 'express'
import ProfilesController from './profiles.controller'
import { ProfilesDto } from './profilesDto/profiles.dto'

const profilesRoute = Router()
const profilesController = new ProfilesController()

profilesRoute.get('/', async (req: Request, res: Response) => {
	const profiles = await profilesController.getAll()
	return res.json(profiles)
})

profilesRoute.get('/:id', async (req: Request, res: Response) => {
	const { id } = req.params
	const profiles = await profilesController.getById(id)
	return res.json(profiles)
})

profilesRoute.post('/create', async (req: Request, res: Response) => {
	const profile: ProfilesDto = req.body
	const { id } = req.params
	await profilesController.create(profile, id)
	return res.json('ok')
})

profilesRoute.delete('/delete/:id', async (req: Request, res: Response) => {
	const { id } = req.params
	await profilesController.delete(id)
	return res.json('ok')
})

export default profilesRoute
