/* ==========================================================================
   Santuario Crozet — video.js
   El vídeo de la portada empieza solo cuando se pulsa (tiene sonido). El botón
   grande lo arranca y desaparece; a partir de ahí mandan los controles del
   navegador. Script normal, sin módulos: también funciona con doble clic.
   ========================================================================== */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var marcos = document.querySelectorAll('[data-video]');
    for (var i = 0; i < marcos.length; i++) {
      (function (marco) {
        var video = marco.querySelector('video');
        var boton = marco.querySelector('.video-marco__play');
        if (!video || !boton) { return; }
        /* Con el script activo, los controles salen solo después de pulsar play. */
        video.controls = false;
        boton.addEventListener('click', function () {
          video.controls = true;
          video.play();
        });
        video.addEventListener('play', function () { marco.classList.add('is-playing'); });
        video.addEventListener('ended', function () {
          marco.classList.remove('is-playing');
          video.controls = false;
          video.load();
        });
      })(marcos[i]);
    }
  });
})();
