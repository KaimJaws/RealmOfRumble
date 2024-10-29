// Obtén el menú principal
const menuPrincipal = document.getElementById('main-menu');

// Obtén las opciones de menú
const opcionesMenu = document.querySelectorAll('.menu-option');

// Agrega eventos de clic a cada opción de menú
opcionesMenu.forEach(opcion => {
  opcion.addEventListener('click', () => {
    switch (opcion.id) {
      case 'jugar':
        jugar();
        break;
      case 'opciones':
        opciones();
        break;
      case 'multijugador':
        multijugador();
        break;
      case 'creditos':
        creditos();
        break;
      case 'salir':
        salir();
        break;
    }
  });
});

// Funciones para cada opción de menú
function jugar() {
  console.log('Jugar');
}

function opciones() {
  console.log('Opciones');
}

function multijugador() {
  console.log('Multijugador');
}

function creditos() {
  console.log('Créditos');
}

function salir() {
  console.log('Salir');
}