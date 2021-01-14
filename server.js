import express from 'express'
import routes from './routes/routes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is launched on port : ${PORT}`)
}) 