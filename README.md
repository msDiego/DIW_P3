# DIW_P3

Concesionario hecho con framework Vue.js 3.

## Requisitos cumplidos del proyecto

### Vue 3

Esta aplicación ha sido creada con Vue usando las funcionalidades 
que nos otorga. Estas funcionalidades han sido:

- Uso de Vue Router
- Uso de Vue Cookies
- Envío de información entre componentes
- Valores dinámicos

### CSS

Para el diseño de esta aplicación, se ha usado la última versión de
Tailwindcss. Gracias a este framework se ha podido diseñar la página de forma 
ordenada y limpia.

Con las clases de este *framework*, se ha creado un carrusel en la página de inicio,
cartas en prácticamente todas las páginas de la aplicación, navbar tanto en el footer
como en el header y el menú hamburguesa del header en la versión móvil.

Este framework también nos facilita herramientas para conseguir una página *responsive* 
para que lleguemos al éxito en nuestra búsqueda de la *"veldadera responsivida prim"*.

### Multimedia y diseño

Las imágenes se encuentran respetando siempre su ratio original, consiguiendo que se 
encuentren proporcionalmente escaladas en todo momento. Se han optimizado las más grandes 
para conseguir un mayor rendimiento y reducir el tiempo de carga de la página.

En el carrusel, se han usado tres imágenes de mismo tamaño para mantener la armonía y que 
estén en su conjunto en su ratio apropiado.

La paleta de colores usada es clara durante el proyecto, siendo el negro y el blanco colores principales
con detalles en color azul y rojo, usados como colores secundarios.

Podríamos así decir que se han seguido los criterios UI/UX vistos durante el curso.

### Miscelánea

Una vez hecha la revisión de rendimiento usando Lighthouse, vemos que la puntuación obtenida
es de 70 puntos sobre 100:

![](../../Imágenes/Capturas de pantalla/Captura desde 2023-02-16 16-42-52.png)

El proyecto cuenta con las siguientes páginas:

- Home
- Login
- Página administrador
- Vista general de un tipo concreto de coches
- Vista de un coche en concreto
- Página final de compra

Para crear la página de forma dinámica, hemos usado herramientas de Vue.js
como podría ser v-for, v-if, v-model... etc.
Con esto conseguimos que la página sea dinámica y el contenido cambie según el 
*input* recibido por el usuario.

Se ha creado una Fake APi con un archivo db.json donde se almacena toda la 
información necesaria para que la aplicación se dinamice según lo *fetcheado*
desde esta API.

También se ha usado la libreria de Vue-cookies para gestionar usuarios y restringir
acceso a según que páginas si la sesión no está iniciada.