const express = require("express");
const { PORT } = require('./config.js')
const rutas = require("./routes/rutas.js");

// servidor de express
const app = express()

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', rutas);

app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
    console.log('Servidor listo en el puerto', PORT)
})