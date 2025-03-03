const plantas = [];


exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
};


exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);
  
    response.render('lista_plantas', { //mandamos la variable al ejs
      plantas: plantas,
    });
  };