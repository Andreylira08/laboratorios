exports.get_menu = (request, response, next) => {
    response.render('menu', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        privilegios: request.session.privilegios || [],
    }); 
};

exports.get_perrito = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'),); 
};