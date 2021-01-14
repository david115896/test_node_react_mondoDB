import express from 'express'
import { indexRooms, showRoom, createRoom, updateRoom, deleteRoom} from './../controllers/roomControllers.js'
import {catchErrors} from './../helpers.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Welcome')
})

router.get('/rooms', indexRooms)

router.get('/room/:id', showRoom)

router.post('/room/create', createRoom)

router.patch('/room/:id', updateRoom)

router.delete('/room/:id', deleteRoom)

//router.post('/room/create', catchErrors(createRoom))

export default router

