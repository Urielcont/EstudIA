//confguracion para base de datos
// Importar el módulo de MySQL
const mysql = require('mysql2');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', // 
    database: 'estudia' // 
  });

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos con ID:', connection.threadId);
});

// Exportar la conexión para usarla en otros módulos
module.exports = connection;
