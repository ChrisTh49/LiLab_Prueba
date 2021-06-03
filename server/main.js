const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'christh',
    password: 'Password1234',
    database: 'verdureria'

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/frutas', (req, res) => {
    const sqlGetFrutas = "SELECT * FROM frutas"
    db.query(sqlGetFrutas, (err, result) => {
        res.send(result);
    });
});

app.get('/verduras', (req, res) => {
    const sqlGetVerduras = "SELECT * FROM verduras"
    db.query(sqlGetVerduras, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert_frutas', (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;

    const sqlInsert = "INSERT INTO frutas (frutas, descripcion, cantidad, precio) VALUES (?,?,?,?)"
    db.query(sqlInsert, [nombre, descripcion, cantidad, precio], (err, result) => {
        console.log(result);
    });
});

app.post('/api/insert_verduras', (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;

    const sqlInsert = "INSERT INTO verduras (verduras, descripcion, cantidad, precio) VALUES (?,?,?,?)"
    db.query(sqlInsert, [nombre, descripcion, cantidad, precio], (err, result) => {
        console.log(result);
    });
});

app.listen(4200, (req, res) => {
    console.log('Server is running');
});