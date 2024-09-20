const z = require("zod");

exports.registerSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    correo: z.string().email("Email inválido"),
    contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

exports.loginSchema = z.object({
    correo: z.string().email("Email inválido"),
    contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});