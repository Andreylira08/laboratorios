const Planta = require('../models/plantas.model')

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
};


exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    const mi_planta = new Planta(request.body.nombre); 
    mi_planta.save();
  
    response.render('lista_plantas', { //mandamos la variable al ejs
      plantas: Planta.fetchAll(),
    });
  };