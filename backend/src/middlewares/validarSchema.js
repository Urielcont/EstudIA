exports.validarSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ mensaje: "Datos inválidos", errores: error.errors });
    }
};