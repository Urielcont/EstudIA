import express from 'express'
import { PORT } from '../src/config.js'

//servidor de express
const app = express()

app.get('/', (req, res) => {
    res.send('Puerto')
})

app.listen(PORT, () => {
    console.log('puerto listo con el puerto', PORT)
})