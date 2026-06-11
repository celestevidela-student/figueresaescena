const botonMenu = document.querySelector('.boton-menu');
const menuPrincipal = document.getElementById('menu-principal');
const enlacesMenu = menuPrincipal ? menuPrincipal.querySelectorAll('a') : [];
const TABLET_MAX = 1024;
const MOBILE_MAX = 430;

function isResponsiveMenu() {
  return window.innerWidth <= TABLET_MAX;
}

function isMobile() {
  return window.innerWidth <= MOBILE_MAX;
}

function abrirMenu() {
  if (!menuPrincipal || !isResponsiveMenu()) return;
  menuPrincipal.classList.add('show');
  botonMenu?.classList.add('is-active');
  botonMenu?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-abierto');
}

function cerrarMenu() {
  if (!menuPrincipal) return;
  menuPrincipal.classList.remove('show');
  botonMenu?.classList.remove('is-active');
  botonMenu?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-abierto');
}

function alternarMenu() {
  if (!menuPrincipal) return;

  if (!isResponsiveMenu()) {
    cerrarMenu();
    return;
  }

  if (menuPrincipal.classList.contains('show')) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
}

if (botonMenu && menuPrincipal) {
  botonMenu.setAttribute('aria-expanded', 'false');

  botonMenu.addEventListener('click', alternarMenu);

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener('click', () => {
      if (isResponsiveMenu()) cerrarMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (!isResponsiveMenu()) cerrarMenu();
  });
}