const express = require('express')
const router = express.Router()

const menu_controller = require('../controllers/menu.controller')

//ROUTER.GET RECIBE MIDDLEWARE PETICIONES HTTP GET  

router.get('/menu', menu_controller.get_menu); 
  
module.exports = router;   