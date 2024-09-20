const express = require("express");
const { PORT } = require('./config.js')
// const cors = require("cors");
const rutas = require("./routes/rutas.js");

//servidor de express
const app = express()

app.use('/api', rutas);

app.get('/', (req, res) => {
    res.send('Puerto')
})

app.listen(PORT, () => {
    console.log('puerto listo con el puerto', PORT)
})