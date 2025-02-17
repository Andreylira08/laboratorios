alert("\tBienvenido! Aqui estaremos aprendiendo fundamentos de Java en nuestro cuarto laboratorio \n");


function getCuadrados(){

let value= document.getElementById("num1").value
    document.write("<h2>Tabla de cuadrados y cubos</h2>");
    document.write("<table border='1' cellspacing='0' cellpadding='5'>");
    document.write("<tr><th>Número</th><th>Cubo</th></tr>")
    
    for (let i = 1; i <= value; i++) {
        document.write(`<tr><td>${i}</td><td>${i ** 2}</td></tr>`); 
    }
    document.write("</table>");

}

function getCubos(){

    let value= document.getElementById("num1").value
    document.write("<h2>Tabla de cuadrados y cubos</h2>");
    document.write("<table border='1' cellspacing='0' cellpadding='5'>");
    document.write("<tr><th>Número</th><th>Cubo</th></tr>")
    
    for (let i = 1; i <= value; i++) {
        document.write(`<tr><td>${i}</td><td>${i ** 3}</td></tr>`); 
    }
    document.write("</table>");
    }