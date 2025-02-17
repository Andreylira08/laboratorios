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



function getNumeros(){
    negativos= 0;
    positivos= 0;
    ceros= 0; 
    const a= [1,2,3,0,-2,-3,-4]
    for (let i=0; i<= a.length;i++){
        if (a[i] < 0 ){
            negativos++
        }
        if(a[i]>0){
            positivos++
        }
        if(a[i]== 0){
            ceros++
    }
}
    return {
        negativos: negativos,
        positivos: positivos,
        ceros: ceros
    };
}

function getPromedio(){
    const b= [1,1,1,1,2,2,2,2]
    let suma=0
    let cantidad=0
    for (let i=0; i< b.length;i++){
        cantidad++
        suma = b[i]+suma
    }

    return { suma, cantidad };

}

function mostrarResultados() {
    const resultados = getNumeros();
    
    document.getElementById('negativos').textContent = resultados.negativos;
    document.getElementById('positivos').textContent = resultados.positivos;
    document.getElementById('ceros').textContent = resultados.ceros;
}

function mostrarPromedio(){
    const promedios = getPromedio();
    const promedio =  promedios.suma / promedios.cantidad; 
    document.getElementById('promedio').textContent=promedio; 
}
let numero = 123

function mostrarInversa(){
    nstring= numero.toString(); 
    arreglo = nstring.split('');
    inversa= arreglo.reverse();
    num= inversa.join('')

    
    document.getElementById('inversa').textContent = num; 

}

function mostrarPrecio(){
    let precio=350;
    let iva = 21;      
    const  precioTotal = precio + precio*21/100
    document.getElementById('precio').textContent = precioTotal; 

}
