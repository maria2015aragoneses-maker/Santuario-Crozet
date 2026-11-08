/* ==========================================================================
   Santuario Crozet — listado.js
   Pinta la rejilla de pinguinos. Sirve a apadrina.html (rejilla completa con
   filtros) y a index.html (tres destacados). Si el contenedor no existe en la
   pagina, no hace nada.
   ========================================================================== */

(function () {
  'use strict';

  var filtroActivo = 'todos';

  /* Una tarjeta del kit (.tile): foto 4:5, anilla y estado en la cabecera,
     especie y colonia debajo. Un pingüino ya apadrinado no es enlace. */
  function crearTarjeta(p, columnas) {
    var apadrinado = p.estado === 'apadrinado';

    var tarjeta = document.createElement(apadrinado ? 'div' : 'a');
    tarjeta.className = 'tile tile--portrait ' + columnas + (apadrinado ? ' tile--apadrinado' : '');
    if (!apadrinado) {
      tarjeta.href = 'ficha.html?id=' + encodeURIComponent(p.anilla);
    }

    var marco = document.createElement('div');
    marco.className = 'tile__media';
    var img = document.createElement('img');
    img.alt = p.especie + ' con la anilla ' + p.anilla;
    img.loading = 'lazy';
    conFotoSegura(img);
    img.src = p.foto;
    marco.appendChild(img);

    var cabecera = document.createElement('div');
    cabecera.className = 'tile__head';
    var titulo = document.createElement('h3');
    titulo.textContent = p.anilla;
    var estado = document.createElement('span');
    estado.className = 'estado ' + (apadrinado ? 'estado--apadrinado' : 'estado--disponible');
    estado.textContent = apadrinado ? 'Ya tiene padrino' : 'Sin nombre';
    cabecera.appendChild(titulo);
    cabecera.appendChild(estado);

    var meta = document.createElement('p');
    meta.className = 'tile__facts';
    meta.textContent = p.especie + ' · ' + p.colonia;

    tarjeta.appendChild(marco);
    tarjeta.appendChild(cabecera);
    tarjeta.appendChild(meta);
    return tarjeta;
  }

  function pintar(contenedor, lista, columnas) {
    contenedor.textContent = '';
    for (var i = 0; i < lista.length; i++) {
      contenedor.appendChild(crearTarjeta(lista[i], columnas));
    }
  }

  function filtrar(clave) {
    if (clave === 'todos') { return PINGUINOS.slice(); }
    if (clave === 'disponibles') {
      return PINGUINOS.filter(function (p) { return p.estado === 'disponible'; });
    }
    return PINGUINOS.filter(function (p) { return p.especie === clave; });
  }

  function iniciarRejilla() {
    var contenedor = document.getElementById('rejilla-pinguinos');
    if (!contenedor) { return; }

    var recuento = document.getElementById('recuento');
    var botones = document.querySelectorAll('.filtro');

    function actualizar() {
      var lista = filtrar(filtroActivo);
      pintar(contenedor, lista, 'span-3');

      if (recuento) {
        var libres = lista.filter(function (p) { return p.estado === 'disponible'; }).length;
        recuento.textContent = lista.length + ' pingüinos · ' + libres + ' disponibles';
      }

      for (var i = 0; i < botones.length; i++) {
        botones[i].setAttribute('aria-pressed', botones[i].dataset.filtro === filtroActivo ? 'true' : 'false');
      }
    }

    for (var i = 0; i < botones.length; i++) {
      botones[i].addEventListener('click', function () {
        filtroActivo = this.dataset.filtro;
        actualizar();
      });
    }

    actualizar();
  }

  function iniciarDestacados() {
    var contenedor = document.getElementById('destacados');
    if (!contenedor) { return; }

    var disponibles = PINGUINOS.filter(function (p) { return p.estado === 'disponible'; });
    pintar(contenedor, disponibles.slice(0, 3), 'span-4');
  }

  document.addEventListener('DOMContentLoaded', function () {
    iniciarRejilla();
    iniciarDestacados();
  });
})();
