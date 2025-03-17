const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canView = require('../util/canViewNombres');
const canCreate = require('../util/canCreateNombres');

const menu_controller = require('../controllers/menu.controller');

//ROUTER.GET RECIBE MIDDLEWARE PETICIONES HTTP GET  

router.get('/',isAuth, menu_controller.get_menu); 

router.get("/perrito",isAuth,menu_controller.get_perrito);
  
module.exports = router;   