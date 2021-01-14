import mongoose from 'mongoose'

const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: value => {
            if(value < 1){
                throw new Error('La chambre doit pouvoir acceuillir au moins une personne')
            }
        }
    }
})

const Room = mongoose.model('Room', RoomSchema)

export default Room 
