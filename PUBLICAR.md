# Cómo publicar y presentar Santuario Crozet

Todo lo que la web necesita (fotos, tipografía, estilos y scripts) está dentro de esta carpeta. Nada se carga de otros servidores, así que la web se ve igual publicada que en local.

## 1. Publicar en GitHub Pages (la dirección que se proyecta)

Solo hace falta la primera vez.

1. Crea un repositorio público en GitHub, por ejemplo `santuario-crozet`. No añadas README ni licencia.
2. En la Terminal, desde esta carpeta:

```bash
git init
git add .
git commit -m "Web Santuario Crozet"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/santuario-crozet.git
git push -u origin main
```

3. En GitHub, ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main** y carpeta **/(root)**, y pulsa **Save**.
4. Al cabo de uno o dos minutos la web queda en `https://TU-USUARIO.github.io/santuario-crozet/`.

Para subir cambios más adelante:

```bash
git add .
git commit -m "Cambios"
git push
```

Las carpetas `shots/` y `.taste-skill/` son capturas y comprobaciones de diseño: el archivo `.gitignore` ya las deja fuera del repositorio.

## 2. Plan B en clase, sin wifi

Copia esta carpeta al portátil de María y, desde ella, arranca un servidor local:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000` en el navegador. Así funciona todo igual que en GitHub Pages, animaciones incluidas, y no hace falta internet. En Windows el comando es `py -m http.server 8000`.

**Si no hay forma de abrir la Terminal:** con doble clic en `index.html` la web se ve con su diseño, sus fotos, el listado, las fichas y el formulario con su certificado. Lo único que no funciona así son las animaciones al hacer scroll y el menú del móvil, porque el navegador las bloquea cuando la web se abre como archivo.

## 3. Antes de presentar

- Abre la web a pantalla completa en el portátil que se va a usar y míralo desde el fondo del aula.
- Prueba el recorrido entero: portada → «Apadrina un pingüino» → una ficha → formulario → certificado → imprimir.
- Si hay un código QR en el póster, haz que apunte a una ficha concreta, por ejemplo `https://TU-USUARIO.github.io/santuario-crozet/ficha.html?id=K-0427`.
