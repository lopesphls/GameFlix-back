import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import gameRouter from './game/game.router'

async function Server() {
	const app = express()

	app.use(express.json())

	app.use(cors())

	app.use('/games', gameRouter)

	app.listen(3000, () =>
		console.log('Servidor rocando no http://localhost:3000'),
	)
}

Server()
