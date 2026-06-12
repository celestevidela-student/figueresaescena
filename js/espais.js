console.log('js espais carregat');

// ------ variables globals ------
var botonesEspais = document.querySelectorAll('.espais-list-item');
var imatgeEspai = document.getElementById('imatge-espai');
var titolEspai = document.getElementById('titol-espai');
var textEspai = document.getElementById('text-espai');
var direccioEspai = document.getElementById('direccio-espai');
var linkPlanol = document.getElementById('link-planol');
var linkFitxa = document.getElementById('link-fitxa');
var botoPrev = document.getElementById('boto-prev');
var botoNext = document.getElementById('boto-next');

var espaiActual = 'jardi';
var indexImatgeActual = 0;

// ------ arrays imatges ------
var imatgesJardi = [
    'media/_mg_6122panorama3.jpg-2993x1691.jpg',
    'media/jardi_4.jpg-900x508.jpg',
    'media/jardi2.jpg-2352x1329.jpg'
];

var imatgesCate = [
  'media/espais/cate_1.jpg-869x491.jpg',
  'media/espais/cate1.jpg-2973x1679.jpg',
  'media/espais/cate3.jpg-3000x1694.jpg'
];

var imatgesCaputxins = [
  'media/espais/caputxins3.jpg-2451x1385.jpg',
  'media/espais/caputxins1.jpg-1295x731.jpg',
  'media/espais/espectadors-caputxins.jpg-4221x2384.jpg'
];

var imatgesToniMontal = [
    'media/tonimontal1.jpg',
    'media/tonimontal2.jpg'
];

var imatgesAulaTeatre = [
    'media/aulateatre1.jpg',
    'media/aulateatre2.jpg'
];

// ------ funcions ------
function desactivarBotonsEspais() {
    var i = 0;

    for(i = 0; i < botonesEspais.length; i++) {
        botonesEspais[i].classList.remove('espais-list-item--active');
    }
}

function activarBotoEspai(idEspai) {
    var i = 0;

    for(i = 0; i < botonesEspais.length; i++) {
        if(botonesEspais[i].dataset.spaceId === idEspai) {
            botonesEspais[i].classList.add('espais-list-item--active');
        }
    }
}

function obtenirImatgesEspai(idEspai) {
    if(idEspai === 'jardi') {
        return imatgesJardi;
    }

    if(idEspai === 'cate') {
        return imatgesCate;
    }

    if(idEspai === 'caputxins') {
        return imatgesCaputxins;
    }

    if(idEspai === 'toni') {
        return imatgesToniMontal;
    }

    if(idEspai === 'aula') {
        return imatgesAulaTeatre;
    }

    return imatgesJardi;
}

function canviarContingutEspai(idEspai) {
    var imatges = obtenirImatgesEspai(idEspai);

    espaiActual = idEspai;
    indexImatgeActual = 0;

    if (idEspai === 'jardi') {
        titolEspai.textContent = 'Teatre Municipal el Jardí';
        textEspai.innerHTML = `
        <p> El Teatre El Jardí és un dels espais més emblemàtics de Figueres. Es va inaugurar 
        el 29 d’abril de 1916, durant les Fires i Festes de la Santa Creu, amb l’òpera La 
        Gioconda del Liceu de Barcelona. L’empresari Pau Pagès en va impulsar la construcció a l’actual 
        plaça Josep Pla, i ben aviat es va convertir en el centre cultural més actiu de la ciutat, combinant 
        teatre, òpera, sarsuela i cinema.
        </p>
        <p>
        Després d’una gran reforma a finals dels vuitanta, el teatre va reobrir el 1991 amb un aforament renovat i millors instal·lacions. Avui El Jardí, amb més de 900 localitats, continua sent un referent cultural i punt de trobada per als amants de les arts escèniques a Figueres.
        <br /> L’any 1983 l’Ajuntament va adquirir l’edifici i el va transformar en el 
        </p>
        <p>
        teatre municipal, obrint una nova etapa amb una programació estable. 
        El primer espectacle va ser El cafè de la Marina, i des de llavors hi han passat companyies com El Tricicle, Dagoll Dagom o Els Joglars.
        </p>
        `;
        direccioEspai.innerHTML = 'Plaça Josep Pla<br>17600 Figueres, Girona';
        linkPlanol.href = '#';
        linkFitxa.href = '#';
        imatgeEspai.alt = 'Vista general del Teatre Municipal el Jardí';
    }

    if (idEspai === 'cate') {
        titolEspai.textContent = 'Sala La Cate';
        textEspai.innerHTML = `
        <p> El 1931 van començar les obres de construcció de l'edifici del Patronat de la Catequística i l'octubre de 1932 es va inaugurar la sala d'espectacles.<br />
        El teatre de La Cate, com popularment se l'ha conegut, ha acollit durant molts anys, amb els seus alts i baixos, a grups i entitats teatrals i podríem dir que ha estat el bressol del teatre figuerenc.
        </p>
        <p>
        Per l’escenari de La Cate han passat la majoria de companyies locals de llarga trajectòria de la ciutat, com el Grup Verdaguer, l'Elenc Dramàtic del Patronat, l'Agrupació Marquina, l'Agrupació Arlequí, el Grup Teatral Tespis o Taller de Teatre.
        <br /> Durant molts d'anys va ser la seu de les representacions dels Pastorets i, recentment, ho torna a ser.
        </p>
        <p>
        Actualment i amb la reforma del 2011, la Sala La Cate s’ha convertit amb el complement perfecte del Teatre Municipal el Jardí, ja que el seu aforament de 300 localitats el fa un espai més que profitós per espectacles de petit i mitjà format.
        D’acord amb un conveni entre l'Ajuntament de Figueres i El Patronat de la Catequística, el consistori s’ocupa actualment de la gestió de la sala principal de l’edifici.
        </p>
        `;
        direccioEspai.innerHTML = 'Ronda del Rector Arolas, 4<br>17600 Figueres, Girona';
        linkPlanol.href = '#';
        linkFitxa.href = '#';
        imatgeEspai.alt = 'Interior de la Sala La Cate';
    }

    if (idEspai === 'caputxins') {
        titolEspai.textContent = 'Auditori Caputxins';
        textEspai.innerHTML = `
        <p>L'Auditori de Caputxins, amb una capacitat per a 202 persones, és un espai nou que va començar la seva activitat 
        la primavera del 2015, després de ser rehabilitat el que havia estat l'antic convent dels Caputxins.
        <br />És un edifici catalogat pel Pla Especial de Protecció d'edificis de Figueres. El convent es va restaurar per tal de destinar-lo a usos culturals, especialment auditori per a concerts i activitats culturals de mig format.
        </p>
        <p>
        L’antic edifici del segle XVIII, es va acabar de construir l’any 1790 pels frares caputxins que havien abandonat l’antic Convent de Sant Roc que va ser enderrocat en temps de Carles III per construir el castell de Sant Ferran i va formar part de la corona de convents extramurs de la vila del set-cents.
        </p>
        <p>
        L’edifici pertany a l’Ajuntament de Figueres des de l’any 1841 arrel de l’aprovació de la legislació desamortitzadora de 1833.
        </p>
        `;
        direccioEspai.innerHTML = 'Carrer del Rec Arnau, 8<br>17600 Figueres, Girona';
        linkPlanol.href = '#';
        linkFitxa.href = '#';
        imatgeEspai.alt = 'Interior de l’Auditori Caputxins';
    }

    if (idEspai === 'toni') {
        titolEspai.textContent = 'Sala Toni Montal';
        textEspai.innerHTML = '<p>La Sala Toni Montal està pensada per a propostes de format reduït.</p><p>És adequada per a concerts, recitals i espectacles de proximitat.</p><p>El vincle entre públic i artistes és un dels seus punts forts.</p>';
        direccioEspai.innerHTML = 'La Cate<br>17600 Figueres, Girona';
        linkPlanol.href = '#';
        linkFitxa.href = '#';
        imatgeEspai.alt = 'Interior de la Sala Toni Montal';
    }

    if (idEspai === 'aula') {
        titolEspai.textContent = 'Aula de teatre';
        textEspai.innerHTML = '<p>L’Aula de teatre és un espai dedicat a la formació escènica.</p><p>S’hi fan tallers, sessions pedagògiques i activitats creatives.</p><p>És un espai funcional i preparat per al treball teatral.</p>';
        direccioEspai.innerHTML = 'Figueres<br>17600 Figueres, Girona';
        linkPlanol.href = '#';
        linkFitxa.href = '#';
        imatgeEspai.alt = 'Aula de teatre';
    }

    imatgeEspai.src = imatges[0];
    desactivarBotonsEspais();
    activarBotoEspai(idEspai);
}

function mostrarImatgeSeguente() {
    var imatges = obtenirImatgesEspai(espaiActual);

    indexImatgeActual = indexImatgeActual + 1;

    if(indexImatgeActual >= imatges.length) {
        indexImatgeActual = 0;
    }

    imatgeEspai.src = imatges[indexImatgeActual];
}

function mostrarImatgeAnterior() {
    var imatges = obtenirImatgesEspai(espaiActual);

    indexImatgeActual = indexImatgeActual - 1;

    if(indexImatgeActual < 0) {
        indexImatgeActual = imatges.length - 1;
    }

    imatgeEspai.src = imatges[indexImatgeActual];
}

function activarEspais() {
    var i = 0;

    for(i = 0; i < botonesEspais.length; i++) {
        botonesEspais[i].addEventListener('click', function() {
            var idEspai = this.dataset.spaceId;
            canviarContingutEspai(idEspai);
        });
    }

    botoNext.addEventListener('click', function() {
        mostrarImatgeSeguente();
    });

    botoPrev.addEventListener('click', function() {
        mostrarImatgeAnterior();
    });

    canviarContingutEspai('jardi');
}

activarEspais();


console.log(imatgeEspai);
console.log(titolEspai);
console.log(textEspai);
console.log(direccioEspai);
console.log(linkPlanol);
console.log(linkFitxa);
