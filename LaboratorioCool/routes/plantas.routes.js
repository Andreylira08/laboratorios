const express = require('express');

const router = express.Router();

const plantas_controller = require ('../controllers/plantas.controller'); 



//router.get es para registrar un middleware para peticiones HTTP GET, para que un middle ware exista necesita una funcion anónima


router.get('/agregar',plantas_controller.get_agregar); //SEPARANDO LA LÓGICA DE LAS RUTAS

router.get('/add',plantas_controller.get_agregar); //AGREGANDO OTRA RUTA QUE HACE EXACTAMENTE LO MISMO 


//router.post es para registrar un middleware para peticiones HTTP POST

router.post('/agregar', plantas_controller.post_agregar);

const path = require('path');

router.get('/regar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html')); //LA RUTA TIENE QUE SER ABSOLUTA, POR QUE YA TE ENCUENTRAS EN EL DIRECTORIO PUBLIC
});

router.get('/',plantas_controller.get_root); 

module.exports = router;