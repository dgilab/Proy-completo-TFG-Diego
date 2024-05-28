const dotenv = require("dotenv");
dotenv.config();

const mysql = require('mysql2/promise');
let pool;

try {
    pool = mysql.createPool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = {conexBD: pool};