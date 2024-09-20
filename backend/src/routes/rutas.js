const express = require("express");
const router = express.Router();

const { registrar, login, logout } = require("../controllers/authController");
const { validarSchema } = require("../middlewares/validarSchema");
const { registerSchema, loginSchema } = require("../schemas/authSchema");
const { verificarToken } = require("../middlewares/verificarToken");

// Ruta para registrar un nuevo usuario
router.post('/registrar', validarSchema(registerSchema), registrar);

// Ruta para iniciar sesión
router.post('/login', validarSchema(loginSchema), login);

// Ruta para cerrar sesión
router.post('/logout', logout);

// Ruta para verificar el token
router.get('/verificar', verificarToken, (req, res) => {
    res.json({ usuario: req.usuario });
});

module.exports = router;