// --------- acordeo ---------


// --------- variables globales ---------
var botonesAcordeon = document.querySelectorAll('.acordeo-toggle');

function actualizarPanel (botonAcordeon, estatBloc, ultimaAccio){
    if(typeof actualitzarPanelDidacticAcordeon === 'function') {
        actualitzarPanelDidacticAcordeon(botonAcordeon, estatBloc, ultimaAccio);
    }
}

function cambiarAc(botonAcordeon) {
    var contenido = botonAcordeon.nextElementSibling;
    var icono = botonAcordeon.querySelector('.acordeo-icon');
    
    if(!contenido) {
        return;
    }
    // prueba manual
    console.log(contenido.classList.contains('oculto'));
    
    var estatOculto = contenido.classList.contains('oculto');
    var textIcono = '';
    var estatBloc = '';
    var accio = '';
    
    if(estatOculto) {
        contenido.classList.remove('oculto');
        textIcono = '-';
        estatBloc = 'obert';
        accio = 'click obrir';
        console.log('abro un bloque acc');
    } else {
        contenido.classList.add('oculto');
        textIcono = '+';
        estatBloc = 'tancat';
        accio = 'click tancat';
        console.log('abro un bloque acc');
    }
    if(icono) {
        icono.textContent = textIcono;
    }
    actualizarPanel(botonAcordeon, estatBloc, accio);
}

function activarAc() {
    if(!botonesAcordeon.length) {
        actualizarPanel(null, 'sense blocs', 'sense ac');
        return;
    }
    actualizarPanel(null, 'cap obert', 'inici');
    for (i = 0; i < botonesAcordeon.length; i++) {
    botonesAcordeon[i].addEventListener('click', function(){
        cambiarAc(this);
    });
    }
    
}

activarAc();

//---------- modal --------//

// --------- variables globales ---------
var botonesDia = document.querySelectorAll('.calendar-day');
var modalDia = document.getElementById('modal-dia');

function mostrarModalDia(botonDia) {
    var fecha = botonDia.dataset.date;
    var tipo = botonDia.dataset.type;
    var titulo = botonDia.dataset.title;
    var hora = botonDia.dataset.time;
    var lugar = botonDia.dataset.place;
    var posicionBoton = botonDia.getBoundingClientRect();
    var leftModal = 0;
    var topModal = 0;

    modalDia.innerHTML = `
        <p class="modal-dia__date">${fecha}</p>
        <p class="modal-dia__label">${tipo}</p>
        <h3 class="modal-dia__title">${titulo}</h3>
        <p class="modal-dia__time">${hora}</p>
        <p class="modal-dia__place">${lugar}</p>
    `;

    modalDia.classList.remove('oculto');

    leftModal = posicionBoton.left + window.scrollX + (posicionBoton.width / 2);
    topModal = posicionBoton.top + window.scrollY - modalDia.offsetHeight - 16;

    modalDia.style.left = leftModal + 'px';
    modalDia.style.top = topModal + 'px';
    modalDia.style.transform = 'translateX(-50%)';
}

function ocultarModalDia() {
    modalDia.classList.add('oculto');
}

function activarModalDia() {
    var i = 0;

    if (!botonesDia.length) {
        return;
    }

    for (i = 0; i < botonesDia.length; i++) {
        if (botonesDia[i].dataset.title) {
            botonesDia[i].addEventListener('mouseenter', function() {
                mostrarModalDia(this);
            });

            botonesDia[i].addEventListener('mouseleave', function() {
                ocultarModalDia();
            });
        }
    }
}

activarModalDia();


