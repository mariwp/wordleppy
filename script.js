let intentos = 6;

let diccionario = ['APPLE', 'WATCH', 'HOUSE', 'TEACH', 'DRIVE', 'BEACH', 'BAKER', 'HAPPY', 'CLEAN', 'GRAPE', 'JUICE', 'PLANT', 'SLEEP', 'QUICK', 'MUSIC', 'QUEEN', 'KNIFE', 'HELLO', 'EARTH', 'FLASH'];

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");
const nuevoJuego = document.getElementById("reTry-button");
const entrada = document.getElementById("guess-input");

window.addEventListener('load', init)

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
    console.log('Disfrute del juego');
    console.log("palabra secreta: " + palabra);
}


button.addEventListener("click", intentar);

entrada.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        button.click();
    }
});
   
nuevoJuego.addEventListener("click", function () {
    location.reload();
});

function intentar() {
    const INTENTO = leerIntento();
    console.log(INTENTO);
}

const input = document.getElementById("guess-input");
const valor = input.value;

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!🤩</h1>")
        return;
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';     //VERDE
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';     //AMARILLO
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';     //GRIS
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😥</h1>");
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");

    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const GRID = document.getElementById("grid");

const ROW = document.createElement('div');
ROW.className = 'row';