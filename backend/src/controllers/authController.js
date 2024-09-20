const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Simularemos una base de datos con un array
let usuarios = [];

exports.registrar = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // Verificar si el usuario ya existe
        if (usuarios.find(u => u.email === email)) {
            return res.status(400).json({ mensaje: "El usuario ya existe" });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada = await bcrypt.hash(password, salt);

        // Crear nuevo usuario
        const nuevoUsuario = { id: usuarios.length + 1, nombre, email, password: passwordEncriptada };
        usuarios.push(nuevoUsuario);

        res.status(201).json({ mensaje: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al registrar usuario" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario
        const usuario = usuarios.find(u => u.email === email);
        if (!usuario) {
            return res.status(400).json({ mensaje: "Credenciales inválidas" });
        }

        // Verificar contraseña
        const passwordValida = await bcrypt.compare(password, usuario.password);
        if (!passwordValida) {
            return res.status(400).json({ mensaje: "Credenciales inválidas" });
        }

        // Generar token
        const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al iniciar sesión" });
    }
};

exports.logout = (req, res) => {
    // En una implementación con tokens JWT, el logout se maneja típicamente en el cliente
    // borrando el token. Aquí solo enviaremos una respuesta de éxito.
    res.json({ mensaje: "Sesión cerrada con éxito" });
};