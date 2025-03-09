const express = require('express');
const router = express.Router();

const back_controller = require('../controllers/back.controller');

//router.get es para registrar un middleware para peticiones HTTP GET, para que un middle ware exista necesita una funcion anónima


router.get('/backend', back_controller.get_back); 
  



module.exports = router;