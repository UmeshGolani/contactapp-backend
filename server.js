import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 8001
import contactRoute from './routes/contact.js'
const app = express()
import connectToDB from './db/db.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))


app.use('/uploads', express.static('uploads'));

app.use('/api/contact', contactRoute)


connectToDB()



app.get('/', (req,res)=>{
    res.send('Helo Server is running Success..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})