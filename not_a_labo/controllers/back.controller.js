const Marvel = require('../models/back.model'); 
const fs = require('fs'); // Módulo para manejar archivos


exports.get_back = (request, response, next) => {
    console.log(request.session.username);
    response.render('back', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        privilegios: request.session.privilegios || [],


    });
};

exports.post_agregar = (req, res, next) => {
    const nombre = req.body.nombre;
    const imagen = req.file.filename || null; // si estás subiendo solo 1 imagen

    const mi_marvel = new Marvel(nombre, imagen);

    mi_marvel.save()
        .then(() => {
            req.session.info = `El héroe ${mi_marvel.nombre} se ha creado`;
            res.redirect('/backend/nombres');
        })
        .catch(error => console.log(error));

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
                privilegios: request.session.privilegios || [],

            });
        }).catch((error) => {
            console.log(error);
        });
};
