const express = require('express');
const app = express(); //guardamos la variable el servidor web
const path = require('path')


app.use(express.static(path.join(__dirname,'public')));  //Para servir archivos estátivos como CSS, Java script, etc que se encuentran en la ruta absoluta en la carpeta public

//Implementamos el motor EJS

app.set('view engine', 'ejs');
app.set('views', 'views');

//Trabajando con sesiones 

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//-----------

const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: false})); //de manera autmatica cada peticion que se envia al servidor los convierte de binario y string lo transforma en una forma mas amigable tock

/////IMAGENES 

const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + file.originalname);
    },
});
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 
////---------------------------------


const csrf = require('csurf');
const csrfProtection = csrf(); 
app.use(csrfProtection); 

//Middleware --Las capaz de nuestra lasaña

//Middleware -- todo lo que hacemos en express - capaz de nuestra lasaña

app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

//--------GENERANDO NUESTRAS RUTAS-----------//

const usersRoutes = require('./routes/users.routes');
app.use('/users', usersRoutes);


const menuRoutes= require('./routes/menu.routes');
app.use('/menu',menuRoutes); 


const backRoutes= require('./routes/back.routes');
app.use('/backend',backRoutes);





//-----------------------------------------------




app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta en caso de que la ruta no exista
    response.status(404).send('No se encuentra lo que estás buscando!'); 
});

app.listen(3000);