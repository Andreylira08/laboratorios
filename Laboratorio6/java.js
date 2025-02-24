const boton = document.getElementById("boton_validar");
const contraseña = "Contraseña"; 


const recibe_contraseña = () => {
    let contraseña_validar = document.getElementById("contraseña_validar").value; 
    console.log("Estamos validando la contraseña")
    console.log(contraseña_validar); 
}

const valida_contraseña =() =>{
    recibe_contraseña(); 

}

boton.onclick = valida_contraseña; 