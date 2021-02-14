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

