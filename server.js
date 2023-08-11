import express from "express";
import cors from 'cors'
import database from "./database/connection.js";
import router from './routes/router.js'

const app= express()
const PORT= process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(PORT,()=> console.log(`listening on http://localhost:${PORT}`))