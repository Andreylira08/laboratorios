const Marvel = require('../models/back.model'); 
const fs = require('fs'); // Módulo para manejar archivos


exports.get_back = (request, response, next) => {
    console.log(request.session.username);
    response.render('back', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),

    });
};

exports.post_agregar =(request, response, next) => {
    console.log(request.body);
    const nombre = request.body.nombre; // Obtenemos el nombre del formulario
    const mi_marvel = new Marvel(nombre);


    //modificando controlador para la bd

    mi_marvel.save() 
        .then(() => {
            request.session.info = `El heroe ${mi_marvel.nombre} se ha creado`;
            response.redirect('/backend/nombres');
        })
        .catch((error) => {
            console.log(error);
        });

//__________________________________








    // Guardar el nombre en un archivo de texto
    fs.appendFile('marvel_nombres.txt', `${nombre}\n`, (err) => {
        console.log('Nombre guardado en marvel_nombres.txt');
    });
};

exports.get_nombres = (request, response, next) => {

    console.log(request.session.privilegios);

    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }


    Marvel.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            response.render('lista_nombres', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                marvels: rows,
                info: mensaje,
            });
        }).catch((error) => {
            console.log(error);
        });
};
