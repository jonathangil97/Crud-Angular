//importar el mongoose para la conexion de la bd
const mongoose = require('mongoose');
//importar el dotenv para configuar el archivo del cluster de la bd
require('dotenv').config({ path: 'config.env' });

// Funcion asincrona
const conectar_DB = async() => {
    //se usa un try catch para que atrape el error por si se conecta a la bd o no
    try {
        //await llama la libreria mongoose y usa el metodo connect
        //luego se realiza el proceso y se llama la variable del cluster
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error);
        //Interrumpe el proceso
        process.exit(1);
    }
}

//llamar el archivo al index
module.exports = conectar_DB