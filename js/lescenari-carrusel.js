console.log("js esta cargando la galeria");

// ------ variables globales ------

var carruselsGaleria = document.querySelectorAll('[data-carr]');
var botonesGaleriaAnt = document.querySelectorAll('[data-gallery-prev]');
var botonesGaleriaSeg = document.querySelectorAll('[data-gallery-next]');

// ------ funciones ------

function obtenerCarruselPorAny(anyo) {
    var carrusel = document.querySelector('[data-carr="' + anyo + '"]');
    return carrusel;
}

function obtenerPasoGaleria(carrusel) {
    var primerSlide = null;
    
    if(!carrusel) {
        return 0;
    }
    
    primerSlide = carrusel.querySelector('.gallery-slide');
    
    if(!primerSlide) {
        return carrusel.clientWidth;
    }
    
    return primerSlide.clientWidth;
}

function moverGaleria(anyo, direccion) {
    var carrusel = obtenerCarruselPorAny(anyo);
    var paso = 0;
    
    if(!carrusel) {
        console.log('no veo el carrusel de ' + anyo);
        return;
    }
    
    paso = obtenerPasoGaleria(carrusel);
    
    if(paso === 0) {
        console.log('no puedo mover la galeria');
        return;
    }
    
    carrusel.scrollBy({
        left: direccion * paso,
        behavior: 'smooth'
    });
    
    console.log('muevo galeria de ' + anyo);
}

function activarBotonesGaleria() {
    var i = 0;
    var anyo = '';
    
    for(i = 0; i < botonesGaleriaAnt.length; i++) {
        botonesGaleriaAnt[i].addEventListener('click', function() {
            anyo = this.getAttribute('data-gallery-prev');
            moverGaleria(anyo, -1);
        });
    }
    
    for(i = 0; i < botonesGaleriaSeg.length; i++) {
        botonesGaleriaSeg[i].addEventListener('click', function() {
            anyo = this.getAttribute('data-gallery-next');
            moverGaleria(anyo, 1);
        });
    }
}

function activarTecladoGaleria() {
    var i = 0;
    var anyo = '';
    
    for(i = 0; i < carruselsGaleria.length; i++) {
        carruselsGaleria[i].addEventListener('keydown', function(event) {
            anyo = this.getAttribute('data-carr');
            
            if(event.key === 'ArrowLeft') {
                moverGaleria(anyo, -1);
            }
            
            if(event.key === 'ArrowRight') {
                moverGaleria(anyo, 1);
            }
        });
    }
}

function activarGaleria() {
    if(!carruselsGaleria.length) {
        console.log('no veo galerias');
        return;
    }
    
    activarBotonesGaleria();
    activarTecladoGaleria();
}

activarGaleria();