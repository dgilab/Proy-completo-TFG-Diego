const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar el archivo de rutas
app.use(require('./routes/bugs'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

module.exports = app;

