/* ==========================================================================
   Santuario Crozet — efectos.js
   Entrada de los bloques al hacer scroll, conteo de las cifras y sombra de la
   cabecera. Todo es decorativo: si algo de esto fallara, la web sigue
   funcionando y el contenido se ve igual.
   ========================================================================== */

(function () {
  'use strict';

  var sinMovimiento = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Entrada progresiva ---------------------------------------------------- */
  function revelar() {
    var elementos = document.querySelectorAll('.revelar');
    if (!elementos.length) { return; }

    /* Navegador antiguo o movimiento reducido: se muestra todo de golpe. */
    if (sinMovimiento || !('IntersectionObserver' in window)) {
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.add('visible');
      }
      return;
    }

    var observador = new IntersectionObserver(function (entradas) {
      for (var i = 0; i < entradas.length; i++) {
        if (entradas[i].isIntersecting) {
          entradas[i].target.classList.add('visible');
          observador.unobserve(entradas[i].target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    for (var j = 0; j < elementos.length; j++) {
      observador.observe(elementos[j]);
    }
  }

  /* Escalona los hijos de un grupo para que entren en cascada -------------- */
  function escalonar() {
    var grupos = document.querySelectorAll('[data-cascada]');
    for (var i = 0; i < grupos.length; i++) {
      var hijos = grupos[i].children;
      for (var j = 0; j < hijos.length; j++) {
        hijos[j].classList.add('revelar');
        hijos[j].style.setProperty('--retraso', (j * 90) + 'ms');
      }
    }
  }

  /* Conteo de las cifras --------------------------------------------------- */
  function contar(elemento) {
    var destino = parseFloat(elemento.dataset.contar);
    var decimales = (elemento.dataset.contar.split('.')[1] || '').length;
    var duracion = 1100;
    var inicio = null;

    function paso(marca) {
      if (inicio === null) { inicio = marca; }
      var avance = Math.min((marca - inicio) / duracion, 1);
      /* Desaceleracion suave */
      var suave = 1 - Math.pow(1 - avance, 3);
      var valor = (destino * suave).toFixed(decimales);
      elemento.textContent = String(valor).replace('.', ',');
      if (avance < 1) { window.requestAnimationFrame(paso); }
    }

    window.requestAnimationFrame(paso);
  }

  function prepararCifras() {
    var cifras = document.querySelectorAll('[data-contar]');
    if (!cifras.length) { return; }

    if (sinMovimiento || !('IntersectionObserver' in window) ||
        !window.requestAnimationFrame) {
      return; /* se queda el valor final que ya esta escrito en el HTML */
    }

    var observador = new IntersectionObserver(function (entradas) {
      for (var i = 0; i < entradas.length; i++) {
        if (entradas[i].isIntersecting) {
          contar(entradas[i].target);
          observador.unobserve(entradas[i].target);
        }
      }
    }, { threshold: 0.6 });

    for (var j = 0; j < cifras.length; j++) {
      observador.observe(cifras[j]);
    }
  }

  /* Sombra de la cabecera al bajar ------------------------------------------ */
  function cabeceraFija() {
    var cabecera = document.querySelector('.cabecera');
    if (!cabecera) { return; }

    function comprobar() {
      cabecera.classList.toggle('cabecera--fija', window.pageYOffset > 12);
    }

    window.addEventListener('scroll', comprobar, { passive: true });
    comprobar();
  }

  document.addEventListener('DOMContentLoaded', function () {
    escalonar();
    revelar();
    prepararCifras();
    cabeceraFija();
  });

  /* Las tarjetas de pinguinos se crean despues, con JavaScript: listado.js
     avisa por aqui para que tambien entren con la animacion. */
  window.revelarNuevos = function (contenedor) {
    if (!contenedor) { return; }
    var hijos = contenedor.children;
    for (var i = 0; i < hijos.length; i++) {
      hijos[i].classList.add('revelar');
      hijos[i].style.setProperty('--retraso', (i * 70) + 'ms');
    }
    revelar();
  };
})();
