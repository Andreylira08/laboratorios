const Marvel = require('../models/back.model'); 
const fs = require('fs'); // Módulo para manejar archivos


exports.get_back = (request, response, next) => {
    response.render('back'); 
};

exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    const nombre = request.body.nombre; // Obtenemos el nombre del formulario
    const mi_marvel = new Marvel(nombre);
    mi_marvel.save();

    // Guardar el nombre en un archivo de texto
    fs.appendFile('marvel_nombres.txt', `${nombre}\n`, (err) => {
        console.log('Nombre guardado en marvel_nombres.txt');
        response.redirect('/backend/nombres'); // Redirigimos a la lista de nombres
    });
};

exports.get_nombres = (request, response, next) => {
    response.render('lista_nombres', {
        n_marvel: Marvel.fetchAll(),
    });
};
