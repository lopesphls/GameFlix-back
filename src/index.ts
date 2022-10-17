import cors from 'cors'
import 'dotenv/config'
import express, { json, urlencoded } from 'express'
import gameRoute from './game/game.routes'
import profilesRoute from './profiles/profiles.routes'
import usersRoute from './users/users.routes'

async function Server() {
	const app = express()

	app.use(json())
	app.use(urlencoded({ extended: true }))

	app.use(cors())

	app.use('/games', gameRoute)
	app.use('/users', usersRoute)
	app.use('/profiles', profilesRoute)

	app.listen(3000, () =>
		console.log('Servidor rocando no http://localhost:3000'),
	)
}

Server()
