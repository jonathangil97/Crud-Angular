//Se importa libreria express
const express = require('express');
//trabajar con el router de express
const router = express.Router();
//comunicarse con el controller
const rutinaController = require('../controllers/rutinaController');


router.post('/', rutinaController.crearRutina)
router.get('/', rutinaController.consultarRutina)
router.get('/:id', rutinaController.consultarRutinaById)
router.put('/:id', rutinaController.actualizarRutina)
router.delete('/:id', rutinaController.eliminarRutina)


//se exporta el router
module.exports = router;