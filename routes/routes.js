import express from 'express'
import { indexRooms, showRoom, createRoom, updateRoom, deleteRoom} from './../controllers/roomControllers.js'
import {catchErrors} from './../helpers.js'

import path, { dirname} from 'path'
import {fileURLToPath} from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Welcome')
})

router.get('/api/rooms', indexRooms)

router.get('/api/rooms/:id', showRoom)

router.post('/api/rooms/create', createRoom)

router.patch('/api/rooms/:id', updateRoom)

router.delete('/api/rooms/:id', deleteRoom)

router.get('/*', (_, res) => {
    res.sendFile(path.joind(__dirname, '../client/build/index.html'))
})
//router.post('/room/create', catchErrors(createRoom))

export default router

