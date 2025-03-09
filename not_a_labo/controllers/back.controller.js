const Marvel = require('../models/back.model'); 


exports.get_back = (request, response, next) => {
    response.render('back'); 
};

exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    const mi_marvel = new Marvel (request.body.nombre)
    mi_marvel.save();

    response.redirect('/backend/nombres'); 
};

exports.get_nombres = (request, response, next) => {
    response.render('lista_nombres', {
        n_marvel: Marvel.fetchAll(),
    });
};
