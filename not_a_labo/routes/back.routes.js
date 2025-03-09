const express = require('express');
const router = express.Router();

const back_controller = require('../controllers/back.controller');

//router.get es para registrar un middleware para peticiones HTTP GET, para que un middle ware exista necesita una funcion anónima


router.get('/', back_controller.get_back); 

router.post('/agregar', back_controller.post_agregar); 

router.get('/nombres',back_controller.get_nombres)

module.exports = router;