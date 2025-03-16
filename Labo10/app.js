const html_perrito=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WOW!</title>
  <link rel="stylesheet" media="all" href="css/dog.css" />
</head>
<body>
<h1>Animación obtenida de una plantila!! No es mía, no se confundan lol</h1>
<div class="container">
  <div class="box">
    <div class="sign"></div>
  </div>
  <div class="dog">
    <div class="dog-group">
      <div class="tongue-open"></div>
      <div class="body-group">
        <div class="dog-box">
          <div class="dog-box-sign">
            <div class="content"></div>
          </div>
          <div class="bottom-shadow"></div>
          <div class="top-left-shadow"></div>
        </div>
        <div class="tail-group">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail last"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dog-shape"></div>
      </div>
      <div class="head-group">
        <div class="ear">
          <div class="ear-container">
            <div class="ear-left"></div>
          </div>
        </div>
        <div class="head"></div>
        <div class="ear right">
          <div class="ear-container">
            <div class="ear-right"></div>
          </div>
        </div>
        <div class="face">
          <div class="muzzle">
            <div class="nose"></div>
            <div class="mouth-close"></div>
            <div class="mouth-open">
              <div class="teeth"></div>
            </div>
            <div class="mouth-barks"></div>
          </div>
          <div class="eyes">
            <div class="eye-left">
              <div class="pupil"></div>
            </div>
            <div class="eye-right">
              <div class="pupil"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="plant-group">
    <div class="pot"></div>
    <div class="plant">
      <div class="stem">
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
      </div>
    </div>
  </div>
  <div class="shapes">
    <div class="red-shape"></div>
    <div class="blue-shape"></div>
    <div class="yellow-shape"></div>
  </div>
</div>
</body>

<div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-start">
  <a href= "/agregar" class="navbar-item">
      Home
  </a>


</html>`;


const html_header= `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorio!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    <link rel= "stylesheet" href= "styles.css">
  </head>
  <body class="Morado">
  <section class="section">
    <div class="container">
      <h1 class="title">
        BIENVENIDO
      </h1>
      <p class="subtitle">
        La reunion de los <strong>LABOS</strong>!
      </p>
      <p class="subtitle is-3" >NO ESTAS PERDIDO!! ES HACIA <strong>ABAJO</strong>!!</p>
    </div>
  </section>
  </body>
        <div>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <a href= "" class="navbar-item">
                Home
            </a>

            
            <a href= "/perrito" class="navbar-item">
                ¿Y este boton a donde lleva?
            </a>
           
            <a href= "/backdoor" class="navbar-item">
                Back-end!
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item is-selected">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a href="/users/logout" class="button is-danger">
                        Logout
                      </a>

                    <a class="button is-link is-rounded" >
                        <strong>Sign up</strong>
                    </a>
                    <a href="/users/login" class="button is-light">
                    Log in
                    </a>
                </div>
            </div>
            </div>
        </div>
        </nav>
</html>`;
const html_form = `<form action="/agregar" method="POST">
              <label for="nombre" class="label">Nombre de la planta</label>
              <input
                class="input is-info"
                type="text"
                placeholder="Orquídea"
                id="nombre"
                name="nombre"
              />
              <br><br>
              <input class="button is-info" type="submit" value="Enviar">
            </form>`;
const html_footer=  `
</div>
</section>
<footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
        The source code is licensed
        <a href="https://opensource.org/license/mit">MIT</a>. The
        website content is licensed
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
          >CC BY NC SA 4.0</a
        >.
      </p>
    </div>
  </footer>
  <script src="js/introjs.js"></script>
</body>
</html>
 `;
 
 const html_back=  `
<div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-start">
  <a href= "/agregar" class="navbar-item">
      Home
  </a>

Aqui no hay nada lol `;
const plantas = [];


const http = require('http');
const server = http.createServer( (request, response) => {  
  
    if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
      console.log(request.url);
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header + html_form + html_footer);
      response.end();
    
    }else if(request.method == "GET" && (request.url == "/perrito" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html_perrito);
        response.end();
      
    }else if(request.method == "GET" && (request.url == "/backdoor" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html_back);
        response.end();
      
    }else if(request.method == "POST" && request.url == "/agregar") {
      
      const datos_completos = [];
  
      request.on('data', (data)=>{
        console.log(data);
        datos_completos.push(data);
      });
  
      request.on('end', () => {
        const string_datos_completos = Buffer.concat(datos_completos).toString();
        console.log(string_datos_completos);
        //split() separa un string por el parámetro recibido, 
        //y cada parte la pone en un arreglo
        const nueva_planta = string_datos_completos.split('=')[1];
  
        //Si fueran 2 inputs:
        //const nueva_planta = string_datos_completos.split('&')[0].split('=')[1];
  
        plantas.push(nueva_planta);
  
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        
        response.write(`<div class="columns">`);
        for(const planta of plantas) {
          response.write(`<div class="column">`);
          response.write(`<div class="card">
            <div class="card-content">
              <div class="content">`);
          response.write(planta);
          response.write(`</div>
              </div>
            </div>`);
          response.write(`</div>`);
        }
        response.write(`</div>`);
  
        response.write(html_footer);
        response.end();
  
      });
  
    } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      response.write('<div class="notification is-danger">La página no existe</div>');
      response.write(html_footer);
      response.end();
    }
      
  });
  
  server.listen(3000);
