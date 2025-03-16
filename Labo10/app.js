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
            <a href= "/menu" class="navbar-item">
                Home
            </a>

            
            <a href= "/menu/perrito" class="navbar-item">
                ¿Y este boton a donde lleva?
            </a>
           
            <a href= "/agregar" class="navbar-item">
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
</body>
</html>
 `;
const plantas = [];


const http = require('http');
const server = http.createServer( (request, response) => {  
  
    if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
      console.log(request.url);
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header + html_form + html_footer);
      response.end();
    } else if(request.method == "POST" && request.url == "/agregar") {
      
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
