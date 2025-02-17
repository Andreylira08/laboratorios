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
let startTime = new Date().getTime();

let num = Math.floor(Math.random() * 11); // Entre 0 y 10
let num2 = Math.floor(Math.random() * 11); // Entre 0 y 10
let numeroAleatorio = parseInt(prompt("Dame el resultado de la suma de " + num + " + " + num2));

let endTime = new Date().getTime();

let TiempoTotal = (endTime - startTime);

if (numeroAleatorio === (num + num2)) {

    alert("CORRECTO! El tiempo que tardaste en responder fue: " + TiempoTotal + " ms");
} else {

    alert("No le sabes mi bro. El tiempo que tardaste en responder fue: " + TiempoTotal + " ms");
}