/* ==========================================================================
   Santuario Crozet — creditos.js
   Rellena la lista de créditos del pie con img/creditos.js (window.CREDITOS).
   Script normal, sin módulos: funciona también abriendo el archivo con doble clic.
   ========================================================================== */
(function () {
  'use strict';
  function rellenar() {
    var destinos = document.querySelectorAll('[data-creditos]');
    var lista = window.CREDITOS || [];
    for (var i = 0; i < destinos.length; i++) {
      var p = destinos[i];
      p.textContent = '';
      for (var j = 0; j < lista.length; j++) {
        var c = lista[j];
        if (j) { p.appendChild(document.createTextNode(' · ')); }
        var a = document.createElement('a');
        a.href = c.url;
        a.textContent = c.archivo.replace(/^img\//, '') + ': ' + c.autor + ' (' + c.licencia + ')';
        p.appendChild(a);
      }
    }
  }
  document.addEventListener('DOMContentLoaded', rellenar);
})();
