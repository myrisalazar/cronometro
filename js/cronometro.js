let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;

function inicio() {
    control = setInterval(cronometro, 10);
    document.getElementById("inicio") = true;
    document.getElementById("parar") = true;
    document.getElementById("continuar") = true;
    document.getElementById("resetear") = true;
}

function parar() {
    clearInterval(control);
    document.getElementById("parar") = true;
    document.getElementById("continuar") = false;
}
function reinicio() {
    clearInterval(control);
    horas = 0;
    minutos = 0;
    segundos = 0;
    centesimas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    document.getElementById("inicio") = true;
    document.getElementById("parar") = true;
    document.getElementById("continuar") = true;
    document.getElementById("resetear") = true;

}
function cronometro() {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        Centesimas.innerHTML = ":" + centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (centesimas == 59) {
        centesimas = -1;
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
        horas++;
        if (horas < 10) { horas = "0" + horas }
        Horas.innerHTML = horas;
    }
}
