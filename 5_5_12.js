var elemento;

function setup () {
    elemento = document.getElementById("formulario");
    elemento.addEventListener("input",manejador);
}

var manejador = function () {
    document.getElementById("mostrarColor").style.backgroundColor = elemento.value;
};


