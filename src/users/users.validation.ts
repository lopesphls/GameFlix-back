import { IsEmail, MaxLength, MinLength } from 'class-validator'

export default class UsersValidation {
	@IsEmail()
	email: string

	@MinLength(6)
	password: string

	@MinLength(11)
	@MaxLength(11)
	CPF: string
}
