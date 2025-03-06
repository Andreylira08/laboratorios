const Planta = require('../models/plantas.model');

exports.get_agregar = (request, response, next) => {
    console.log(request.session.username);
    response.render('agregar_planta', {
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const mi_planta = new Planta(request.body.nombre);
    mi_planta.save();

    response.redirect('/plantas/');
}

exports.get_root = (request, response, next) => {
    response.render('lista_plantas', {
        isLoggedIn: request.session.isLoggedIn || false,
        plantas: Planta.fetchAll(),
    });
};

exports.get_regar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};