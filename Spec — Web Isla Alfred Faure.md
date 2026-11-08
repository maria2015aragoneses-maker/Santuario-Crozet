# Spec — Web Isla Alfred Faure

Nov 6, 2026 · @Julio

La web es la plataforma de apadrinamiento de la Zona 1 de la isla: explica qué se quiere hacer allí y permite apadrinar un pingüino concreto. Se publica en GitHub Pages con el nombre Santuario Crozet, y María la presenta en proyector el Nov 11, 2026.

Cerrar esta spec antes de escribir código es lo que evita los retoques en cadena. Los ajustes de color y espaciado se pueden hacer después; las funcionalidades y la estructura, no.

## Restricciones duras

Cuatro condiciones no negociables. Cada decisión posterior se comprueba contra ellas.

**Se publica en GitHub Pages y se mantiene compatible con apertura local.** La web vive en una dirección pública, que es desde donde se presenta. Para que siga funcionando si el aula no tiene internet, se construye además de forma que abrirla con doble clic en `index.html` funcione igual. Eso obliga a dos cosas: los datos de los pingüinos van en un archivo `.js` cargado con una etiqueta `script` normal, no en un JSON leído con `fetch()`, y no se usa la sintaxis `import` / `export` de módulos ES. El navegador bloquea ambos mecanismos al abrir un archivo local. El código sí se reparte en todos los archivos que haga falta.

**Nada cargado desde terceros.** No se usan fuentes de Google Fonts, CDN, mapas incrustados, vídeos de YouTube ni analíticas. Todo lo que la página necesita vive dentro del repositorio. Así la web se comporta igual publicada que abierta en local, y no depende de que un servicio ajeno responda el día de la presentación.

**Se proyecta.** La web se juzga a cinco metros, con los colores lavados y el contraste reducido por el proyector. Los tamaños de letra pequeños, los grises claros sobre blanco y los detalles finos desaparecen.

**Entrega el 11 de noviembre.** Quedan cinco días. El alcance se fija ahora y no crece.

## Público y objetivo

La web habla a un único público: una persona particular que podría apadrinar un pingüino. No hay área para clientes corporativos; la propuesta para Google y Microsoft vive en el dossier y en la presentación oral, no aquí.

El visitante entra sin saber nada de la isla. La web tiene que conseguir tres cosas, en este orden:

1. Que entienda en diez segundos qué es la isla y qué se hace en ella.
2. Que acepte el argumento central: el alquiler del campus de IA financia la reserva. En una frase, el dinero de la IA paga a los pingüinos.
3. Que apadrine un pingüino concreto, no "un pingüino" en abstracto.

El tercer punto es la conversión y manda sobre el diseño: todo camino razonable dentro del sitio termina pudiendo llegar a la ficha de un pingüino.

Hay un público secundario real que conviene no olvidar: el tribunal que evalúa. Mira la web durante dos minutos buscando si el proyecto se sostiene. Por eso la sección que explica las tres zonas y el bucle de financiación tiene que ser explícita y estar a un clic, aunque un donante real quizá no la leería entera.

## Mapa del sitio

Cinco páginas. Todo el contenido sale del dossier; la columna de la derecha dice de dónde, para que nadie tenga que inventarse datos.

| Página | Qué contiene | Fuente en el dossier |
| --- | --- | --- |
| Inicio | Portada con la isla y la frase central. Las cifras clave (150 km², 3,5 °C, 80 MW eólicos, 0 litros de agua). Resumen de las tres zonas. Tres pingüinos destacados con enlace a su ficha. | Secciones 01, 07 |
| La isla | Qué es, dónde está, cómo es el clima y el terreno. La fauna: pingüino rey, pingüino papuá, albatros errante, elefante marino del sur, foca peletera. | Secciones 01, 02, 03, 05 |
| El proyecto | Las tres zonas con su superficie y su función. El bucle: el viento alimenta el campus, el campus paga el alquiler, el alquiler financia la reserva. Los compromisos ambientales (cero agua, cero residuos, reversibilidad, perimetro de exclusión de 2 km). | Secciones 04, 06, 07, 10 |
| Apadrina | Rejilla de los pingüinos disponibles con foto, anilla, especie y estado. Filtro por especie o colonia. | Contenido nuevo, coherente con la sección 05 |
| Ficha de pingüino | Una página por animal: identificador de anilla, especie, colonia, años monitorizado, último avistamiento, investigador responsable, y el botón de apadrinar. | Contenido nuevo |

La ficha individual es la pieza que más decisiones arrastra. Tiene URL propia precisamente para que cualquier otra pieza del proyecto pueda apuntar a un animal concreto.

El pie de todas las páginas lleva el aviso de proyecto académico ficticio y la nota de que las donaciones son simuladas.

## Historias de usuario y criterios de aceptación

Esta es la parte que hay que leer con atención y corregir. Cada criterio está escrito para poder comprobarse haciendo clic, sin opinar. Si algo no está aquí, no se construye.

### H1 · Entender el proyecto desde la portada

- [ ] La portada muestra el nombre de la isla y una frase que explica el proyecto, visibles sin hacer scroll.
- [ ] Las cifras clave aparecen con su unidad y coinciden exactamente con el dossier.
- [ ] Desde la portada hay un enlace visible a la sección del proyecto y otro a apadrinar.

### H2 · Entender el bucle de financiación

- [ ] La página del proyecto muestra las tres zonas con su nombre, su porcentaje y su superficie.
- [ ] Explica de forma explícita que el alquiler del campus financia la reserva.
- [ ] Se entiende sin haber leído el dossier.

### H3 · Ver los pingüinos disponibles

- [ ] La página de apadrinar lista los ocho pingüinos, cada uno con su foto, anilla, especie y colonia.
- [ ] Los que ya tienen padrino se muestran marcados como tales y no son apadrinables.
- [ ] Al hacer clic en cualquiera se abre su ficha.

### H4 · Consultar la ficha de un pingüino

- [ ] La ficha muestra: anilla, especie, colonia, año desde el que está monitorizado, último avistamiento e investigador responsable.
- [ ] Mientras no tiene padrino, muestra la etiqueta "sin nombre".
- [ ] La ficha tiene una dirección propia a la que se llega directamente, para que el código QR del póster pueda apuntar a ella.
- [ ] Hay un botón de apadrinar visible sin hacer scroll.
- [ ] Desde la ficha se puede volver al listado sin usar el botón de atrás del navegador.

### H5 · Apadrinar un pingüino

- [ ] El formulario pide el nombre del padrino, su email, el nombre que le quiere poner al pingüino, y una cuota de pago único a elegir entre 15 €, 30 € y 60 €.
- [ ] Si falta algún campo obligatorio, al enviar aparece un mensaje de error junto al campo y no se avanza.
- [ ] Si el email no tiene formato válido, aparece error y no se avanza.
- [ ] Al enviar correctamente se muestra un certificado con la foto del pingüino, el nombre que le ha puesto el padrino, la anilla, el nombre del padrino, la cuota y la fecha.
- [ ] El certificado se puede imprimir o guardar como PDF desde el navegador y sale bien maquetado.
- [ ] En ningún punto se pide un número de tarjeta ni se simula un cobro.

### H7 · Funcionar el día de la presentación

- [ ] Todo lo anterior funciona abriendo `index.html` con doble clic, sin servidor y sin internet, en el portátil de María.
- [ ] No hay ningún error en la consola del navegador.
- [ ] Ningún enlace lleva a una página inexistente.

### Preguntas abiertas

- Las ocho fotos con licencia libre, a ser posible de una misma serie, con su autor y licencia anotados. Es lo único que bloquea el arranque.
- Confirmar que valen los nombres de colonias e investigadores de la sección siguiente, o cambiarlos.

## Los ocho pingüinos

Datos inventados, coherentes con el dossier. Revísalos y cambia lo que quieras; esto es lo que irá en `datos.js`.

Ninguno tiene nombre. El nombre lo pone el padrino al apadrinarlo, y es el que sale en el certificado. Hasta entonces la ficha muestra la anilla y la etiqueta "sin nombre".

| Anilla | Especie | Colonia | Monitorizado desde | Último avistamiento | Investigador | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| K-0427 | Pingüino rey | Baie du Marin | 2019 | 12 de octubre de 2026 | Camille Rousseau | Disponible |
| K-0518 | Pingüino rey | Baie du Marin | 2021 | 28 de septiembre de 2026 | Camille Rousseau | Disponible |
| K-0634 | Pingüino rey | Baie Américaine | 2018 | 3 de octubre de 2026 | Antoine Berger | Apadrinado |
| K-0702 | Pingüino rey | Baie du Marin | 2022 | 19 de octubre de 2026 | Léa Marchand | Disponible |
| K-0815 | Pingüino rey | Baie Américaine | 2020 | 7 de octubre de 2026 | Antoine Berger | Disponible |
| K-0931 | Pingüino rey | Baie du Marin | 2017 | 22 de octubre de 2026 | Camille Rousseau | Apadrinado |
| P-0113 | Pingüino papuá | Pointe Basse | 2023 | 15 de octubre de 2026 | Hugo Vasseur | Disponible |
| P-0147 | Pingüino papuá | Pointe Basse | 2023 | 1 de noviembre de 2026 | Léa Marchand | Disponible |

Dos salen ya apadrinados a propósito: así se ve en la rejilla que el estado existe y que no todos están disponibles.

Las cuotas son de pago único: 15 €, 30 € y 60 €.

Cada pingüino necesita una foto en `img/`, con su autor y licencia anotados para citarlos en el pie del sitio.

## Decisiones técnicas

**HTML, CSS y JavaScript a pelo.** Sin React, sin Vue, sin Tailwind, sin build. Un framework aquí añade un paso de compilación que puede fallar a cinco días de la entrega y no aporta nada que este sitio necesite.

**Una página HTML por sección, y una sola plantilla para las fichas.** La ficha de cada pingüino se resuelve con un parámetro en la dirección (`ficha.html?id=k0427`) y el JavaScript rellena los datos. Así hay una sola plantilla que mantener en vez de quince archivos casi iguales, y cada ficha sigue teniendo su dirección propia.

**Los datos van en un archivo `datos.js` como una constante.** No es un JSON cargado con `fetch`, por la restricción de `file://`. Se incluye con una etiqueta `script` normal. Cada pingüino es un objeto con sus campos y la foto apunta a un archivo de la carpeta `img/`.

**Estado del formulario en memoria.** Nada de `localStorage`, nada de servidor. Al recargar se pierde, y está bien: es una demo.

**Fuentes del sistema.** Una pila de fuentes seguras en vez de cargarlas de internet. Se ve bien en cualquier ordenador y no depende de la red.

**Imágenes comprimidas y en la carpeta.** Ninguna enlazada desde fuera. Conviene no pasar de 300 KB por imagen para que la navegación sea instantánea en el proyector.

La estructura de la carpeta queda así:

```markdown
santuario-crozet/
  index.html
  isla.html
  proyecto.html
  apadrina.html
  ficha.html
  css/base.css
  css/componentes.css
  js/datos.js
  js/listado.js
  js/ficha.js
  js/formulario.js
  img/
```

El despliegue es GitHub Pages desde la rama principal del repositorio: esta carpeta se publica tal cual, sin ningún paso de compilación. Como nada depende de `fetch()` ni de módulos, la misma carpeta funciona publicada y abierta en local, que es el seguro frente a un aula sin internet.

## Sistema de diseño

Todos los colores, tamaños y espaciados se definen como variables CSS en un único sitio, al principio de `estilos.css`. Ninguna regla del resto del archivo escribe un color a mano. Esto es lo que convierte "cambia el verde y dame más aire" en una edición de tres líneas en vez de una búsqueda por todo el proyecto, y es la razón por la que los retoques de diseño se pueden dejar para el final sin miedo.

La dirección visual, a falta de material definitivo: paleta sobria tomada del paisaje real — basalto oscuro, gris niebla, blanco hielo — con un único color de acento para las acciones. Nada de verde eco genérico ni degradados; el sitio debe parecer una organización científica seria, no una campaña.

Pautas de legibilidad en proyector, que son restricciones y no gustos:

- Texto de párrafo a 18 píxeles como mínimo; los títulos, grandes de verdad.
- Contraste alto siempre. Nada de gris claro sobre blanco: se desvanece en la proyección.
- El color nunca es la única señal. Un pingüino ya apadrinado se marca con una etiqueta de texto, no solo con un tono distinto.
- Las acciones principales, como un botón grande con mucho margen alrededor.
- Probar la web en pantalla completa y alejándose tres o cuatro metros antes de darla por buena.

Responsive: se diseña para pantalla de ordenador, que es como se va a ver el día de la entrega, y se comprueba que en móvil no se rompe. Un móvil solo importa de verdad si al final hay código QR.

## Fuera de alcance

Nada de esto se construye. Está escrito para poder decir que no sin volver a discutirlo.

- Donaciones sueltas sin apadrinar. La web solo apadrina.
- Pasarela de pago o cobro real, simulado o no. No se pide ningún dato bancario en ningún punto.
- Cuentas de usuario, inicio de sesión o área privada del padrino.
- Base de datos, backend o panel de administración.
- Envío real de correos.
- Varios idiomas. Solo español.
- Blog, noticias, tienda, voluntariado, memoria de cuentas.
- Área para clientes corporativos. Esa propuesta vive en el dossier y en la presentación oral.
- Mapa interactivo de la isla. Si hace falta mapa, es una imagen.
- Animaciones elaboradas al hacer scroll.

Si aparece la tentación de añadir algo de esta lista en los próximos cinco días, la respuesta es que no cabe.

## Plan hasta la entrega

Cinco días. El orden importa: la estructura y el contenido primero, el diseño al final, porque con las variables CSS los retoques de color y espaciado son baratos hasta el último momento.

| Día | Qué se hace |
| --- | --- |
| Viernes 6 | Cerrar esta spec. Decidir pingüinos, nombres e importes. Reunir las fotos con su licencia. |
| Sábado 7 | Repositorio creado y GitHub Pages activado desde el primer día, aunque no haya nada. Las cinco páginas en HTML con el contenido real escrito, sin estilo. Navegación completa. |
| Domingo 8 | `datos.js` con todos los pingüinos. Listado y ficha funcionando. Formulario de apadrinamiento con sus validaciones y el certificado. |
| Lunes 9 | Sistema de diseño: variables, tipografía, color, espaciado. Aquí el sitio pasa de esqueleto a web. |
| Martes 10 | Repaso de los criterios de aceptación uno a uno, en el portátil de María, desde la dirección pública y también con doble clic. Ajustes finales. |
| Miércoles 11 | Entrega y presentación. |

El día 10 no es opcional. Probar en el ordenador que se va a usar, con doble clic en el archivo y sin internet, es lo que separa una demo que funciona de una que falla delante del tribunal.

### Checklist de verificación final

- [ ] Todos los criterios de aceptación de la sección anterior, comprobados uno a uno.
- [ ] Abierta con doble clic, sin servidor, en el portátil de María.
- [ ] Con el wifi desconectado, para confirmar que no depende de nada externo.
- [ ] Consola del navegador sin errores en ninguna página.
- [ ] Todos los enlaces llevan a algún sitio real.
- [ ] Vista a pantalla completa y desde varios metros de distancia.
- [ ] El certificado se imprime bien.
- [ ] El aviso de proyecto ficticio aparece en todas las páginas.
- [ ] María ha recorrido el sitio entera al menos una vez antes de presentar.
