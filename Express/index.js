//console.log('Texto de prueba nodemon');
//importar libreria de express / Trae todos los servicios de express
const express = require('express');

// se crea la variable conexion para conectar la bd
const conectar_DB = require('./config/db')

//Importar libreria cors
const cors = require('cors');
//se comunica con express y se guarda en la variable app
const app = express();

//se llama la variable del cluster 
conectar_DB();
app.use(cors());

//Express recibe inforacion en formato json
app.use(express.json());

//Se utiliza el use y los paths api/rutinas para testear con postman 
app.use('/api/rutinas', require('./routes/rutinaRoute'))

//crear un servidor para express / muestra algo en el path por defecto
// app.get('/', (req, res) => {
//     res.send('Mi aplicacion con express')
// })

//escuchador del puerto
app.listen(3000, (req, res) => {
    console.log('El servidor se esta ejecutando')
})