const express = require('express');

const router = express.Router();


const plantas = [];

router.get('/menu', (request, response, next) => {
  response.render('menu.ejs');
});



module.exports = router;