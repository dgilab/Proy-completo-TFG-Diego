const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// Importación de la conexión a la base de datos
const { conexBD } = require("../config.db");

// Manejador de errores para la consulta de bugs
const getBugs = async (req, res) => {
    try {
        const [rows, fields] = await conexBD.execute('SELECT * FROM bugs');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los bugs:', error);
        res.status(500).json({ error: 'Error al obtener los bugs.' });
    }
};

// Manejador para la inserción de bugs
const postBugs = async (req, res) => {
    const { bug } = req.body;
    try {
        const query = 'INSERT INTO bugs (bug, fecha, estado) VALUES (?, NOW(), false)'
        await conexBD.execute(query, [bug]);
        res.status(201).send('Bug notificado.');
    } catch (error) {
        console.error('Error insertando el bug:', error);
        res.status(500).json({ error: 'Error insertando el bug.' });
    }
};

const actuEstadoBug = async (req, res) => {
    const { id } = req.params
    try {
        const query = 'UPDATE bugs SET estado = true WHERE id = ?'
        const [result] = await conexBD.execute(query, [id])
        if (result.affectedRows === 0) {
            res.status(404).send('Bug no encontrado.')
        } else {
            res.status(200).send('Estado del bug actualizado.')
        }
    } catch (error) {
        console.error('Error actualizando el estado del bug: ', error)
        res.status(500).json({ error: 'Error actualizando el estado del bug.' })
    }
}

// Configuración de las rutas
app.route("/bugs")
    .get(getBugs)
    .post(postBugs);

app.route("/bugs/:id")
    .put(actuEstadoBug);

module.exports = app;