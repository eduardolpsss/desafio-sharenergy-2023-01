import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

// Connect to MongoDB database
mongoose.connect('Sua string de conexão MongoDB')
    .then((data) => {
        console.log('[API]: Connected to MongoDB.')
    })

    .catch((err) => {
        console.log('[API]: Error connecting to MongoDB: ', err.message)
    })

app.listen(3333, () => {
    console.log('[API]: Server is running on port 3333.')
})