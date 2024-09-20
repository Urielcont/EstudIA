const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require('../config/configDB'); // Importa la conexión a la base de datos
const { JWT_SECRET } = require("../config");
const { check, validationResult } = require('express-validator');

exports.registrar = async (req, res) => {
    try {
        const { nombre, correo, contrasena } = req.body;

        // Verificar si el usuario ya existe en la base de datos
        connection.query('SELECT * FROM usuario WHERE correo = ?', [correo], async (err, results) => {
            if (err) {
                return res.status(500).json({ mensaje: "Error al verificar el usuario" });
            }

            if (results.length > 0) {
                return res.status(400).json({ mensaje: "El usuario ya existe" });
            }

            // Encriptar la contraseña
            const salt = await bcrypt.genSalt(10);
            const passwordEncriptada = await bcrypt.hash(contrasena, salt);

            // Crear el nuevo usuario en la base de datos
            const nuevoUsuario = { nombre, correo, contrasena: passwordEncriptada };

            connection.query('INSERT INTO usuario SET ?', nuevoUsuario, (err, result) => {
                if (err) {
                    return res.status(500).json({ mensaje: "Error al registrar usuario" });
                }

                res.status(201).json({ mensaje: "Usuario registrado con éxito" });
            });
        });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al registrar usuario" });
    }
};

exports.login = [
    // Validaciones
    check('correo', 'El email es requerido').isEmail(),
    check('contrasena', 'La contraseña es requerida').notEmpty(),
    
    async (req, res) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ mensaje: "Datos inválidos", errores: errores.array() });
        }

        const { correo, contrasena } = req.body;

        try {
            // Buscar usuario por email en la base de datos
            connection.query('SELECT * FROM usuario WHERE correo = ?', [correo], async (err, results) => {
                if (err) {
                    return res.status(500).json({ mensaje: "Error al buscar el usuario" });
                }
                
                console.log(results); // Para verificar el resultado

                if (results.length === 0) {
                    return res.status(400).json({ mensaje: "Credenciales inválidas 1" });
                }

                console.log(results, "pasa el primero")

                const usuario = results[0];

                // Comparar la contraseña enviada con la almacenada
                const passwordValida = await bcrypt.compare(contrasena, usuario.contrasena);
                if (!passwordValida) {
                    return res.status(400).json({ mensaje: "Credenciales inválidas 2" });
                }

                // Generar token JWT
                const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: "1h" });

                // Enviar token en la respuesta
                res.json({ token, mensaje: "Inicio de sesión exitoso" });
            });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al iniciar sesión" });
        }
    }
];

exports.logout = (req, res) => {
    // En una implementación con tokens JWT, el logout se maneja típicamente en el cliente
    // borrando el token. Aquí solo enviaremos una respuesta de éxito.
    res.json({ mensaje: "Sesión cerrada con éxito" });
};