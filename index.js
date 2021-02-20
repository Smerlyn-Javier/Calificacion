function nota(){

// VARIABLES
var examen = parseInt (document.getElementById("examen").value);
var plataforma = parseInt (document.getElementById("plataforma").value);
var trabajo = parseInt (document.getElementById("trabajo").value);
var valores = parseInt (document.getElementById("valores").value);
var resultado = document.getElementById("resultado");

var sumavalores = examen+plataforma+trabajo+valores

    if(sumavalores >= 90 && sumavalores<= 100 ){
        resultado.innerHTML = `${sumavalores} Aprobado con: A`
    }
    else if(sumavalores >= 80 && sumavalores<= 89 ){
        resultado.innerHTML = `${sumavalores} Aprobado con: B`
    }
    else if(sumavalores >= 70 && sumavalores<= 79 ){
        resultado.innerHTML = `${sumavalores} Aprobado con: C`
    }
    else if(sumavalores >= 60 && sumavalores<= 69 ){
        resultado.innerHTML = `${sumavalores} Reprobado con: D`
    }
    else if(sumavalores >= 0 && sumavalores<= 59 ){
        resultado.innerHTML = `${sumavalores} Reprobado con: F`
    }
    else{
        console.log(sumavalores)
        alert('el resultado no es un valor aceptado, limitese al valor maximo de cada campo');
    }
}

// GALERIA

var zFondos150 = ["url('foto1-150.jpg')","url('foto2-150.jpg')","url('foto3-150.jpg')","url('foto4-150.jpg')"];
var zFondos600 = ["url('foto1-600.jpg')","url('foto2-600.jpg')","url('foto3-600.jpg')","url('foto4-600.jpg')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage =zFondos600[0];
subImagenes[0].style.backgroundImage =zFondos150[0];
subImagenes[1].style.backgroundImage =zFondos150[1];
subImagenes[2].style.backgroundImage =zFondos150[2];
subImagenes[3].style.backgroundImage =zFondos150[3];

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos600[3];}