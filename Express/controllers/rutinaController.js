//llamar el modelo
const Rutina = require('../models/Rutina');

//Exportar la funcion
//Aplicar tema de asincronismo
exports.crearRutina = async (req, res) => {
    // console.log('creando rutina desde el controller');
    // console.log(req.body);
    try {
        let data_rutina;
        //instancear el modelo
        data_rutina = new Rutina(req.body);
        await data_rutina.save();
        res.send(data_rutina)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.consultarRutina = async (req, res) => {
    try {
        //Espere que la bd vaya y consulte el modelo(Rutina)
        const data_rutina = await Rutina.find();
        //Va a devolver un response y se castea a formato json
        res.json(data_rutina);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.consultarRutinaById = async (req, res) => {
    try {
        //el req.params.id accede a las flags de la url 
        const data_rutina = await Rutina.findById(req.params.id);
        
        // Se crea un condicional para validar si el id esta mal escrito
        // ! Si data_rutina es false
        if(!data_rutina){
            res.status(404).json({message: 'No sen encontraron coincidencias'})
        }
        res.json(data_rutina);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.actualizarRutina = async (req, res) => {
    try {
        //Acceder a las keys
        const {nombre, series, repeticiones, descanso} = req.body
        //Segun esa informacion va actualizar la Rutina
        //Al momento de dar click en actualizar se necesita saber el id que se va actualizar
        let data_rutina = await Rutina.findById(req.params.id)

        data_rutina.nombre = nombre;
        data_rutina.series = series;
        data_rutina.repeticiones = repeticiones;
        data_rutina.descanso = descanso;

        data_rutina = await Rutina.findOneAndUpdate({_id: req.params.id}, data_rutina, {new: true});
        res.json(data_rutina);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.eliminarRutina = async (req, res) => {
    try {
        const data_rutina = await Rutina.findById(req.params.id);
        if(!data_rutina){
            res.status(404).json({message: 'No sen encontraron coincidencias para eliminar rutina'})
        }
        await Rutina.findByIdAndRemove({_id: req.params.id})
        res.json({message: 'Rutina deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}