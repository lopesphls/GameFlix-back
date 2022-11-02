import ProfilesService from './profiles.service'
import { ProfilesDto } from './profilesDto/profiles.dto'

export default class ProfilesController {
	private profilesService = new ProfilesService()

	public async getAll() {
		return await this.profilesService.getAll()
	}

	public async getById(id: string) {
		return await this.profilesService.getById(id)
	}

	public async create(createProfilesDTO: ProfilesDto, id: string) {
		return await this.profilesService.create(createProfilesDTO, id)
	}

	public async delete(id: string) {
		return await this.profilesService.delete(id)
	}
}
