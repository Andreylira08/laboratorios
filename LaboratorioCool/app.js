

const express = require('express');
const app = express();

const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); 

const plantas= [];

//Middleware

app.use((request, response, next) => {
    console.log('Middleware!');


    next(); //Le permite a la petición avanzar hacia el siguiente middleware

});

//app.get para registrar un middleware para peticiones HTTP GET 

const plantasRoutes = require('./routes/plantas.routes'); 

app.use('/plantas',plantasRoutes)

app.get('/plantas/agregar',(request,response,next) => {                  //Registrar un middleware 
    
    response.send(html_header + html_form + html_footer); 
});

//app.post

app.post('/plantas/agregar',(request,response,next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);
    let html=html_header; 
    for(let planta of plantas){
   
    html += html_footer
    
}
    response.send(html_header + html_form + html_footer); 
});



app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});


app.listen(3000);
                      