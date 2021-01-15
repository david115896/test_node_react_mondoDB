import RoomModel from './../models/roomModel.js'

export const indexRooms = async (req, res) => {
    const rooms = await RoomModel.find({}) 
    res.send(rooms)
}

export const showRoom = async (req, res) => {
    try{
        const room = await RoomModel.findOne({_id: req.params.id}) // RoomModel.find({name: "Room 1"})
        res.send(room)
    }
    catch(err){
        res.status(500).send(err)
    }
   
}

export const createRoom = async (req, res) => {
    console.log(req)
    const room = new RoomModel(req.body)
    try{
        await room.save()
        res.send(room)
    }
    catch(err){
        res.status(500).send(err)
    }
}

export const updateRoom = async (req, res) => {
    try{
        const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body) // RoomModel.find({name: "Room 1"})
        await room.save()
        res.send(room)
    }
    catch(err){
        res.status(500).send(err)
    }
}

export const deleteRoom = async (req, res) => {
    try{
        const room = await RoomModel.findByIdAndDelete(req.params.id) 
        if(!room){
            res.status(404).send('La chambre n\'existe pas')
        }
        res.status(200).send()
        
    }
    catch(err){
        res.status(500).send(err)
    }
}