const express = require('express');
const app = express(); //guardamos la variable el servidor web
const path = require('path')


app.use(express.static(path.join(__dirname,'public')));  //Para servir archivos estátivos como CSS, Java script, etc que se encuentran en la ruta absoluta en la carpeta public

//Implementamos el motor EJS

app.set('view engine', 'ejs');
app.set('views', 'views');



const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: false})); //de manera autmatica cada peticion que se envia al servidor los convierte de binario y string lo transforma en una forma mas amigable tock

//Middleware --Las capaz de nuestra lasaña

//Middleware -- todo lo que hacemos en express - capaz de nuestra lasaña

app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

//--------GENERANDO NUESTRAS RUTAS-----------//

const menuRoutes= require('./routes/menu.routes');
app.use('/',menuRoutes); 


const backRoutes= require('./routes/back.routes');
app.use('/',backRoutes);






//-----------------------------------------------




app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta en caso de que la ruta no exista
    response.status(404).send('No se encuentra lo que estás buscando!'); 
});

app.listen(3000);