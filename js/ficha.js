/* ==========================================================================
   Santuario Crozet — ficha.js
   Lee la anilla del parametro ?id= de la direccion y rellena la ficha.
   Una sola plantilla (ficha.html) sirve para los ocho pinguinos, y cada uno
   conserva su propia direccion: es lo que permite que el QR del poster
   apunte a un animal concreto.
   ========================================================================== */

(function () {
  'use strict';

  function anillaDeLaUrl() {
    var busqueda = window.location.search || '';
    var partes = busqueda.replace(/^\?/, '').split('&');

    for (var i = 0; i < partes.length; i++) {
      var par = partes[i].split('=');
      if (par[0] === 'id' && par[1]) {
        return decodeURIComponent(par[1].replace(/\+/g, ' '));
      }
    }
    return null;
  }

  function fila(clave, valor) {
    var f = document.createElement('div');
    var c = document.createElement('dt');
    c.textContent = clave;
    var v = document.createElement('dd');
    v.textContent = valor;
    f.appendChild(c);
    f.appendChild(v);
    return f;
  }

  function mostrarNoEncontrado() {
    var texto = document.querySelector('.hero__text');
    var aviso = document.getElementById('no-encontrado');
    var form = document.getElementById('apadrinar');
    document.getElementById('ficha-titulo').textContent = 'Pingüino';
    document.getElementById('ficha-sinnombre').textContent = 'no encontrado';
    document.getElementById('ficha-nota').textContent = 'Esa anilla no está en la reserva. Elige uno de los ocho pingüinos del listado.';
    if (aviso) { aviso.hidden = false; }
    if (form) { form.hidden = true; }
    var botones = document.querySelectorAll('[data-accion-principal]');
    for (var i = 0; i < botones.length; i++) { botones[i].hidden = true; }
    if (texto) { texto.setAttribute('data-vacio', ''); }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var anilla = anillaDeLaUrl() || 'K-0427';
    var pinguino = buscarPinguino(anilla);

    if (!pinguino) {
      mostrarNoEncontrado();
      return;
    }

    var apadrinado = pinguino.estado === 'apadrinado';
    document.title = pinguino.anilla + ', ' + pinguino.especie.toLowerCase() + ': Santuario Crozet';

    var img = document.getElementById('ficha-foto');
    conFotoSegura(img);
    img.src = pinguino.foto;
    img.alt = pinguino.especie + ' con la anilla ' + pinguino.anilla;

    var kicker = document.getElementById('ficha-especie');
    kicker.lastChild.textContent = pinguino.cientifico + ' · ' + pinguino.colonia;
    /* La anilla nunca se parte por el guion al cambiar de línea. */
    var titulo = document.getElementById('ficha-titulo');
    titulo.textContent = pinguino.especie + ' ';
    var anillaTitulo = document.createElement('span');
    anillaTitulo.style.whiteSpace = 'nowrap';
    anillaTitulo.textContent = pinguino.anilla;
    titulo.appendChild(anillaTitulo);
    document.getElementById('ficha-sinnombre').textContent = apadrinado ? 'ya tiene padrino' : 'sin nombre';
    document.getElementById('ficha-nota').textContent = pinguino.nota;

    var marcas = document.querySelectorAll('[data-anilla]');
    for (var i = 0; i < marcas.length; i++) { marcas[i].textContent = pinguino.anilla; }

    var datos = document.getElementById('ficha-datos');
    datos.appendChild(fila('Colonia', pinguino.colonia));
    datos.appendChild(fila('Seguido desde', String(pinguino.desde)));
    datos.appendChild(fila('Último avistamiento', pinguino.avistamiento));
    datos.appendChild(fila('Investigador', pinguino.investigador));

    if (apadrinado) {
      /* Ya tiene padrino: no se puede apadrinar otra vez. */
      document.getElementById('apadrinar').hidden = true;
      var botones = document.querySelectorAll('[data-accion-principal]');
      for (var j = 0; j < botones.length; j++) { botones[j].hidden = true; }
      return;
    }

    if (window.prepararFormulario) {
      window.prepararFormulario(pinguino);
    }
  });
})();
