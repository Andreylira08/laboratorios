const boton = document.getElementById("boton_validar");
const contraseña = "Contraseña"; 


const recibe_contraseña = () => {
    let contraseña_validar = document.getElementById("contraseña_validar").value; 
    console.log("Estamos validando la contraseña")
    console.log(contraseña_validar); 
    return contraseña_validar; 
};

const contraseña_incorrecta =() => {
    const imagen = document.getElementById("imagen_incorrecta");
    imagen.innerHTML = `<img alt="Foto de una jacaranda" 
        src="https://www.infobae.com/resizer/v2/OZFNIFVJZRGVBADNKBYEXGY72E.jpg?auth=530fdabe786d0980b49cbc63e9f897c6cfe2d57ad4fbd3c829db69f9062173ff&smart=true&width=350&height=350&quality=85">`;
};

const contraseña_correcta =() => {
    const imagen = document.getElementById("imagen_incorrecta");
    imagen.innerHTML = `<img alt="Foto de una jacaranda" 
        src="https://media.tenor.com/eJOO_CytoWoAAAAM/jarvis-tony-stark.gif">`;

};

const valida_contraseña =() =>{
    let contraseña_validar = recibe_contraseña(); 
    if (contraseña_validar === contraseña){
        console.log("Contraseña correcta!!");
        contraseña_correcta(); 
    }else{
        console.log("Contraseña incorrecta!!");
        contraseña_incorrecta(); 
    }
};



boton.onclick = valida_contraseña; 