const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canView = require('../util/canViewNombres');
const canCreate = require('../util/canCreateNombres');


const back_controller = require('../controllers/back.controller');

//router.get es para registrar un middleware para peticiones HTTP GET, para que un middle ware exista necesita una funcion anónima


router.get('/', isAuth,canCreate,back_controller.get_back); 

router.post('/agregar',isAuth,canCreate, back_controller.post_agregar); 

router.get('/:id',isAuth,canView, back_controller.get_nombres);

router.get('/nombres',isAuth,canView,back_controller.get_nombres)

module.exports = router;