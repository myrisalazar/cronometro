let operacionUno;
let operacionDos;
let operacion;


function init() {
    //variables de todas las teclas
    document.getElementById("uno");
    document.getElementById("dos");
    document.getElementById("tres");
    document.getElementById("cuatro");
    document.getElementById("cinco");
    document.getElementById("seis");
    document.getElementById("siete");
    document.getElementById("ocho");
    document.getElementById("nueve");
    document.getElementById("cero");
    document.getElementById("resultado");
    document.getElementById("reset");
    document.getElementById("suma");
    document.getElementById("resta");
    document.getElementById("multiplicacion");
    document.getElementById("division");
    document.getElementById("igual");
}

//Eventos de click para cada numero
uno.onclick = function () {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function () {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function () {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function () {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function () {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function () {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function () {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function () {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function () {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function () {
    resultado.textContent = resultado.textContent + "0";
}

reset.onclick = function () {
    resetear(); //funcion C para volver todo a cero
}
suma.onclick = function () {
    operacionUno = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function () {
    operacionUno = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function () {
    operacionUno = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function () {
    operacionUno = resultado.textContent;
    operacion = "/";
    limpiar();
}

igual.onclick = function () {
    operacionDos = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operacionUno = 0;
    operacionDos = 0;
    operacion = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operacionUno) + parseFloat(operacionDos);
            break;
        case "-":
            res = parseFloat(operacionUno) - parseFloat(operacionDos);
            break;
        case "*":
            res = parseFloat(operacionUno) * parseFloat(operacionDos);
            break;
        case "/":
            res = parseFloat(operacionUno) / parseFloat(operacionDos);
            break;
    }
    resetear();
    resultado.textContent = res;
}


