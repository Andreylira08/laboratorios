const Marvel = require('../models/back.model'); 
const fs = require('fs'); // Módulo para manejar archivos


exports.get_back = (request, response, next) => {
    console.log(request.session.username);
    response.render('back', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    const nombre = request.body.nombre; // Obtenemos el nombre del formulario
    const mi_marvel = new Marvel(nombre);
    mi_marvel.save();

    response.setHeader('Set-Cookie', `ultima_marvel=${mi_marvel.nombre}`);


    //modificando controlador para la bd

    mi_planta.save() 
        .then(() => {
            console.log("heroe guardada");
            response.redirect('/backend/nombres');
        })
        .catch((error) => {
            console.log(error);
        });

//__________________________________








    // Guardar el nombre en un archivo de texto
    fs.appendFile('marvel_nombres.txt', `${nombre}\n`, (err) => {
        console.log('Nombre guardado en marvel_nombres.txt');
        response.redirect('/backend/nombres'); // Redirigimos a la lista de nombres
    });
};

exports.get_nombres = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('lista_nombres', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        n_marvel: Marvel.fetchAll(),
    });
};
