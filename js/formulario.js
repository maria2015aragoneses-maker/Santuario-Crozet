/* ==========================================================================
   Santuario Crozet — formulario.js
   Validacion del formulario de apadrinamiento y generacion del certificado.
   Nada se guarda ni se envia a ningun sitio, y en ningun punto se piden
   datos bancarios: es una demostracion.
   ========================================================================== */

(function () {
  'use strict';

  var pinguinoActual = null;
  var radio_id;

  function pintarCuotas() {
    var contenedor = document.getElementById('cuotas');
    if (!contenedor) { return; }

    for (var i = 0; i < CUOTAS.length; i++) {
      var cuota = CUOTAS[i];

      var etiqueta = document.createElement('label');
      etiqueta.className = 'cuota';
      radio_id = 'cuota-' + cuota.importe;

      var radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'cuota';
      radio.value = String(cuota.importe);
      radio.id = radio_id;
      radio.setAttribute('aria-describedby', 'error-cuota');
      if (i === 1) { radio.checked = true; }

      var importe = document.createElement('span');
      importe.className = 'cuota__importe';
      importe.textContent = cuota.importe + ' €';

      var nota = document.createElement('span');
      nota.className = 'cuota__nota';
      nota.textContent = cuota.nota;

      etiqueta.appendChild(radio);
      etiqueta.appendChild(importe);
      etiqueta.appendChild(nota);
      contenedor.appendChild(etiqueta);

      radio.addEventListener('change', marcarCuotaElegida);
    }

    marcarCuotaElegida();
  }

  /* Resalta la cuota seleccionada sin depender del selector CSS :has(). */
  function marcarCuotaElegida() {
    var etiquetas = document.querySelectorAll('.cuota');
    for (var i = 0; i < etiquetas.length; i++) {
      var input = etiquetas[i].querySelector('input');
      etiquetas[i].classList.toggle('cuota--elegida', !!(input && input.checked));
    }
  }

  /* Errores al estilo del kit: aria-invalid en el campo y el motivo debajo. */
  function marcarError(idCampo, mensaje) {
    var input = idCampo === 'cuota'
      ? document.querySelector('input[name="cuota"]')
      : document.getElementById(idCampo);
    var error = document.getElementById('error-' + idCampo);
    if (input) { input.setAttribute('aria-invalid', 'true'); }
    if (error) { error.textContent = mensaje; error.hidden = false; }
  }

  function limpiarErrores() {
    var marcados = document.querySelectorAll('#formulario-apadrinar [aria-invalid]');
    for (var i = 0; i < marcados.length; i++) { marcados[i].removeAttribute('aria-invalid'); }
    var errores = document.querySelectorAll('#formulario-apadrinar .field__error');
    for (var j = 0; j < errores.length; j++) { errores[j].hidden = true; errores[j].textContent = ''; }
    var estado = document.getElementById('estado-formulario');
    if (estado) { estado.textContent = ''; }
  }

  function emailValido(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
  }

  function fechaDeHoy() {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
                 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var d = new Date();
    return d.getDate() + ' de ' + meses[d.getMonth()] + ' de ' + d.getFullYear();
  }

  function mostrarCertificado(datos) {
    document.getElementById('bloque-formulario').hidden = true;

    var bloque = document.getElementById('bloque-certificado');
    bloque.hidden = false;

    var foto = document.getElementById('cert-foto');
    conFotoSegura(foto);
    foto.src = pinguinoActual.foto;
    foto.alt = pinguinoActual.especie + ' con el código de seguimiento ' + pinguinoActual.codigo;

    document.getElementById('cert-nombre').textContent = datos.nombrePinguino;
    document.getElementById('cert-codigo').textContent =
      pinguinoActual.especie + ' · código ' + pinguinoActual.codigo;

    document.getElementById('cert-texto').textContent =
      datos.nombrePadrino + ' apadrina a ' + datos.nombrePinguino +
      ' y contribuye con ' + datos.cuota +
      ' € a su seguimiento científico en la reserva de la Isla Alfred Faure.';

    document.getElementById('cert-fecha').textContent = fechaDeHoy();
    document.getElementById('cert-responsable').textContent = pinguinoActual.investigador;

    /* Comprobado antes de llamarlo: no todos los navegadores lo implementan y
       un error aqui ensuciaria la consola el dia de la presentacion. */
    if (typeof bloque.scrollIntoView === 'function') {
      document.getElementById('apadrinar').scrollIntoView({ block: 'start' });
    }
  }

  function alEnviar(evento) {
    evento.preventDefault();
    limpiarErrores();

    var nombrePadrino = document.getElementById('nombre-padrino').value.trim();
    var email = document.getElementById('email').value.trim();
    var nombrePinguino = document.getElementById('nombre-pinguino').value.trim();

    var radio = document.querySelector('input[name="cuota"]:checked');
    var cuota = radio ? radio.value : null;

    var hayError = false;

    if (!nombrePadrino) {
      marcarError('nombre-padrino', 'Escribe tu nombre: sale en el certificado.');
      hayError = true;
    }

    if (!email) {
      marcarError('email', 'Escribe tu correo electrónico.');
      hayError = true;
    } else if (!emailValido(email)) {
      marcarError('email', 'Escribe un correo con @, como nombre@correo.es.');
      hayError = true;
    }

    if (!nombrePinguino) {
      marcarError('nombre-pinguino', 'Escribe el nombre que le pones al pingüino.');
      hayError = true;
    }

    if (!cuota) {
      marcarError('cuota', 'Elige una de las tres cuotas.');
      hayError = true;
    }

    if (hayError) {
      var fallos = document.querySelectorAll('#formulario-apadrinar [aria-invalid="true"]');
      if (fallos.length) { fallos[0].focus(); }
      var estado = document.getElementById('estado-formulario');
      if (estado) {
        estado.textContent = fallos.length === 1 ? 'Falta 1 campo por corregir.' : 'Faltan ' + fallos.length + ' campos por corregir.';
      }
      return;
    }

    mostrarCertificado({
      nombrePadrino: nombrePadrino,
      nombrePinguino: nombrePinguino,
      cuota: cuota
    });
  }

  /* La llama ficha.js cuando ya sabe que pinguino se esta viendo. */
  window.prepararFormulario = function (pinguino) {
    pinguinoActual = pinguino;

    var formulario = document.getElementById('formulario-apadrinar');
    if (!formulario) { return; }

    pintarCuotas();
    formulario.addEventListener('submit', alEnviar);

    var imprimir = document.getElementById('imprimir');
    if (imprimir) {
      imprimir.addEventListener('click', function () { window.print(); });
    }
  };
})();
