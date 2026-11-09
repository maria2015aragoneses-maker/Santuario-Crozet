/* ==========================================================================
   Santuario Crozet — datos.js
   Los datos viven aquí, como constantes, cargados con una etiqueta <script>
   normal. NO se usa fetch() ni módulos ES: eso permite que la web funcione
   igual publicada en GitHub Pages que abierta con doble clic en local.
   ========================================================================== */

/* Cuotas de apadrinamiento. Pago único. */
var CUOTAS = [
  { importe: 15, nota: 'Seguimiento no intrusivo' },
  { importe: 30, nota: 'Seguimiento y censo anual' },
  { importe: 60, nota: 'Seguimiento, censo y divulgación científica' }
];

/* Imagen que se muestra mientras no haya foto real en img/ */
var FOTO_PENDIENTE = 'img/pendiente.svg';

/* Los ocho pingüinos.
   Ninguno tiene nombre: el nombre lo pone el padrino al apadrinarlo.
   Para poner las fotos reales basta con dejar los archivos en img/ con el
   nombre que indica el campo "foto". No hay que tocar código. */
var PINGUINOS = [
  {
    codigo: 'K-0427',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2019,
    investigador: 'Camille Rousseau',
    estado: 'disponible',
    foto: 'img/K-0427.jpg',
    nota: 'Macho adulto. Ha criado en tres temporadas consecutivas.'
  },
  {
    codigo: 'K-0518',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2021,
    investigador: 'Camille Rousseau',
    estado: 'disponible',
    foto: 'img/K-0518.jpg',
    nota: 'Hembra joven. Es el primer año que se la observa incubando.'
  },
  {
    codigo: 'K-0634',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2018,
    investigador: 'Antoine Berger',
    estado: 'apadrinado',
    foto: 'img/K-0634.jpg',
    nota: 'Uno de los individuos con la serie de datos más larga.'
  },
  {
    codigo: 'K-0702',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2022,
    investigador: 'Léa Marchand',
    estado: 'disponible',
    foto: 'img/K-0702.jpg',
    nota: 'Realiza viajes de alimentación especialmente largos.'
  },
  {
    codigo: 'K-0815',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2020,
    investigador: 'Antoine Berger',
    estado: 'disponible',
    foto: 'img/K-0815.jpg',
    nota: 'Un comportamiento poco frecuente en la especie ha llamado la atención del equipo.'
  },
  {
    codigo: 'K-0931',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    desde: 2017,
    investigador: 'Camille Rousseau',
    estado: 'apadrinado',
    foto: 'img/K-0931.jpg',
    nota: 'El individuo monitorizado desde hace más tiempo en toda la reserva.'
  },
  {
    codigo: 'P-0113',
    especie: 'Pingüino papúa',
    cientifico: 'Pygoscelis papua',
    desde: 2023,
    investigador: 'Hugo Vasseur',
    estado: 'disponible',
    foto: 'img/P-0113.jpg',
    nota: 'Cría en el borde de la pradera de tundra.'
  },
  {
    codigo: 'P-0147',
    especie: 'Pingüino papúa',
    cientifico: 'Pygoscelis papua',
    desde: 2023,
    investigador: 'Léa Marchand',
    estado: 'disponible',
    foto: 'img/P-0147.jpg',
    nota: 'Forma parte de un pequeño grupo que se estableció tras el temporal de 2022.'
  }
];

/* Utilidades compartidas --------------------------------------------------- */

function buscarPinguino(codigo) {
  for (var i = 0; i < PINGUINOS.length; i++) {
    if (PINGUINOS[i].codigo === codigo) { return PINGUINOS[i]; }
  }
  return null;
}

/* Si la foto real todavía no está en img/, se sustituye por el marcador. */
function conFotoSegura(img) {
  img.onerror = function () {
    img.onerror = null;
    img.src = FOTO_PENDIENTE;
  };
}
