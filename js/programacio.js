console.log("js de programacio cargado");

// --------- variables globales ---------
var botonTotaProgramacio = document.getElementById('btn-tota-programacio');
var seccioProgramacio = document.getElementById('tota-programacio');
var cardGoteborg = document.getElementById('card-goteborg');
var eventoGoteborgSuperior = document.getElementById('event-goteborg-top');
var botonesComprar = document.querySelectorAll('.card-btn');
var botonesNav = document.querySelectorAll('.main-nav a');

// --------- funciones ---------

function irATodaLaProgramacion() {
    if(!seccioProgramacio) {
        console.log('no encuentro la seccion inferior');
        return;
    }

    seccioProgramacio.scrollIntoView({
        behavior: 'smooth'
    });
}

function irAGoteborg() {
    window.location.href = 'goteborg.html';
}

function activarBotonProgramacion() {
    if(!botonTotaProgramacio) {
        console.log('no encuentro el boton de toda la programacion');
        return;
    }

    botonTotaProgramacio.addEventListener('click', function() {
        irATodaLaProgramacion();
    });
}

function activarBotonesComprar() {
    var i = 0;

    if(!botonesComprar.length) {
        return;
    }

    for(i = 0; i < botonesComprar.length; i++) {
        botonesComprar[i].addEventListener('click', function(event) {
            event.stopPropagation();
            alert('Aquesta acció és una demo. Aquí aniria la compra d’entrades.');
        });
    }
}

activarBotonProgramacion();
activarBotonesComprar();