const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');


const back_controller = require('../controllers/back.controller');

//router.get es para registrar un middleware para peticiones HTTP GET, para que un middle ware exista necesita una funcion anónima


router.get('/', isAuth,back_controller.get_back); 

router.post('/agregar',isAuth, back_controller.post_agregar); 

router.get('/:id',isAuth, back_controller.get_nombres);

router.get('/nombres',isAuth,back_controller.get_nombres)

module.exports = router;