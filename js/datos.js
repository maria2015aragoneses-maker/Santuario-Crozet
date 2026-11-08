/* ==========================================================================
   Santuario Crozet — datos.js
   Los datos viven aquí, como constantes, cargados con una etiqueta <script>
   normal. NO se usa fetch() ni módulos ES: eso permite que la web funcione
   igual publicada en GitHub Pages que abierta con doble clic en local.
   ========================================================================== */

/* Cuotas de apadrinamiento. Pago único. */
var CUOTAS = [
  { importe: 15, nota: 'Anillamiento y seguimiento' },
  { importe: 30, nota: 'Seguimiento y censo anual' },
  { importe: 60, nota: 'Seguimiento, censo y telemetría' }
];

/* Imagen que se muestra mientras no haya foto real en img/ */
var FOTO_PENDIENTE = 'img/pendiente.svg';

/* Los ocho pingüinos.
   Ninguno tiene nombre: el nombre lo pone el padrino al apadrinarlo.
   Para poner las fotos reales basta con dejar los archivos en img/ con el
   nombre que indica el campo "foto". No hay que tocar código. */
var PINGUINOS = [
  {
    anilla: 'K-0427',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie du Marin',
    desde: 2019,
    avistamiento: '12 de octubre de 2026',
    investigador: 'Camille Rousseau',
    estado: 'disponible',
    foto: 'img/K-0427.jpg',
    nota: 'Macho adulto. Ha criado en tres temporadas consecutivas en el sector norte de la colonia.'
  },
  {
    anilla: 'K-0518',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie du Marin',
    desde: 2021,
    avistamiento: '28 de septiembre de 2026',
    investigador: 'Camille Rousseau',
    estado: 'disponible',
    foto: 'img/K-0518.jpg',
    nota: 'Hembra joven, anillada cuando era un pollo. Es el primer año que se la observa incubando.'
  },
  {
    anilla: 'K-0634',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie Américaine',
    desde: 2018,
    avistamiento: '3 de octubre de 2026',
    investigador: 'Antoine Berger',
    estado: 'apadrinado',
    foto: 'img/K-0634.jpg',
    nota: 'Uno de los individuos con la serie de datos más larga de la colonia occidental.'
  },
  {
    anilla: 'K-0702',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie du Marin',
    desde: 2022,
    avistamiento: '19 de octubre de 2026',
    investigador: 'Léa Marchand',
    estado: 'disponible',
    foto: 'img/K-0702.jpg',
    nota: 'Realiza viajes de alimentación especialmente largos, de hasta dieciséis días.'
  },
  {
    anilla: 'K-0815',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie Américaine',
    desde: 2020,
    avistamiento: '7 de octubre de 2026',
    investigador: 'Antoine Berger',
    estado: 'disponible',
    foto: 'img/K-0815.jpg',
    nota: 'Cambió de colonia en 2023, un comportamiento poco frecuente en la especie.'
  },
  {
    anilla: 'K-0931',
    especie: 'Pingüino rey',
    cientifico: 'Aptenodytes patagonicus',
    colonia: 'Baie du Marin',
    desde: 2017,
    avistamiento: '22 de octubre de 2026',
    investigador: 'Camille Rousseau',
    estado: 'apadrinado',
    foto: 'img/K-0931.jpg',
    nota: 'El individuo monitorizado desde hace más tiempo en toda la reserva.'
  },
  {
    anilla: 'P-0113',
    especie: 'Pingüino papúa',
    cientifico: 'Pygoscelis papua',
    colonia: 'Pointe Basse',
    desde: 2023,
    avistamiento: '15 de octubre de 2026',
    investigador: 'Hugo Vasseur',
    estado: 'disponible',
    foto: 'img/P-0113.jpg',
    nota: 'Nidifica en el borde de la pradera de tundra, a cien metros de la playa.'
  },
  {
    anilla: 'P-0147',
    especie: 'Pingüino papúa',
    cientifico: 'Pygoscelis papua',
    colonia: 'Pointe Basse',
    desde: 2023,
    avistamiento: '1 de noviembre de 2026',
    investigador: 'Léa Marchand',
    estado: 'disponible',
    foto: 'img/P-0147.jpg',
    nota: 'Forma parte de la pequeña subcolonia que se estableció tras el temporal de 2022.'
  }
];

/* Utilidades compartidas --------------------------------------------------- */

function buscarPinguino(anilla) {
  for (var i = 0; i < PINGUINOS.length; i++) {
    if (PINGUINOS[i].anilla === anilla) { return PINGUINOS[i]; }
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
