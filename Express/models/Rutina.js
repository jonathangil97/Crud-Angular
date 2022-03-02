//llamar mongoose para trabajar con la bd
const mongoose = require('mongoose');

//Arquitectura del modelo de la bd
const rutinasSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        require: true
    },
    series: {
        type: Number,
        require: true
    },
    repeticiones: {
        type: Number,
        require: true
    },
    descanso: {
        type: 'string',
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

//se exporta el modelo y se crea la coleccion rutina
module.exports = mongoose.model('rutina', rutinasSchema)

