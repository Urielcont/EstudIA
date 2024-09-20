const z = require("zod");

exports.registerSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

exports.loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});