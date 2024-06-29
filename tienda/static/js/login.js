import { getUsser, registro } from './getUsser.js';

console.log("Hola mundo");

/* Registro */ 
let usser = "";
let pass = "";
let name = "";

let vUsser = document.getElementById('emailR');
let vPass = document.getElementById('claveR');
let vName = document.getElementById('nombreR');

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    usser = vUsser.value;
    name = vName.value;
    pass = vPass.value;

    if(name === ""){
        alert("Falta Nombre")
        return;
    };

    if(usser === ""){
        alert("Falta Correo")
        return;
    };

    if(pass === ""){
        alert("Falta Contraseña")
        return;
    };

    registro(usser, name, pass); // Llamar a la función login definida en login.js
});


/* Ingreso */ 
let bUsser = document.getElementById("emailI");
let bPass = document.getElementById("claveI");

let btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    usser = vUsser.value;
    pass = vPass.value;

    if(usser === ""){
        alert("Falta Correo")
        return;
    };

    if(pass === ""){
        alert("Falta Contraseña")
        return;
    };
});