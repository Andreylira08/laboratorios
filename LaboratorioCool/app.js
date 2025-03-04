const express = require('express');
const app = express(); //guardamos la variable el servidor web


const path = require('path')
app.use(express.static(path.join(__dirname,'public'))); 

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');


app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: false})); //de manera autmatica cada peticion que se envia al servidor los convierte de binario y string lo transforma en una forma mas amigable tock

//Middleware -- todo lo que hacemos en express - capaz de nuestra lasaña

app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

const plantasRoutes = require('./routes/plantas.routes');

app.use('/plantas', plantasRoutes); //plantamos un middle ware en la ruta plantas, le voy a poner ahi lo que tenga el router de este archivo el post y get del archivo "plantas.routes"

const menuRoutes =require('./routes/menu.routes');
app.use('',menuRoutes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta en caso de que la ruta no exista
    response.status(404).send('No se encuentra lo que estás buscando!'); 
});

app.listen(3000);