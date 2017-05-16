# MusineDAW

## Descripción de la aplicación:

Esta aplicación tratará de copiar a la conocida aplicación 8tracks (http://8tracks.com/). Consiste en una red social en la que se pueden compartir listas de reproducción de música (solo usuarios privados pueden subir playlists). Después cualquier usuario sin registrarse o logearse podrá escuchar listas de reproducción, pero no podrá ni guardar en favoritos sus listas, artistas o canciones favoritas (como si puede hacer un usuario privado). 

Las listas se podrán contener tags para poder encontrarlas al buscarlas más tarde. También estarán los artistas de cada canción en los cuales se podrán ver todas las canciones subidas a la plataforma que les pertenecen. En la página de busqueda mencionada anteriormente se podrán buscar tanto playlists, como artistas.

Además, la aplicación incorporará una funcionalidad de red social. Se podrán tener seguidores y seguir a otros usuarios. A parte de eso, en el muro del usuario saldrán las últimas playlists subidas, o que le han gustado a los usuarios seguidos. Y por último según lo que le haya gustado a otros usuarios, se recomendará al usuario que listas de reproducción le pueden gustar.

## Las 5 entidades son:

- Usuario: Aquí trataremos todo el tema del usuario privado, y su espacio personalizado en el que podrá subir playlists, volver a escuchar sus listas o canciones favoritas y seguir a otros usuarios o artistas. El usuario público lo dejaremos sin ningún acceso pero tampoco tendrá los privilegios del usuario privado.

- Playlist: Esta es la entidad principal de la aplicación. Constará de un conjunto de canciones que podrá escuchar cualquier usuario (privado o público).

- Cancion: Este será el elemento más pequeño de toda la aplicación. Estas serán las que se añadirán a las playlists. No se pueden escuchar canciones individualmente ya que la página consta de playlists y no de canciones (solo si se crea una playlist con una sola canción). Cada canción tiene un artista como propietario.

- Artista: Estos son los propietarios de las canciones. Estos tendrán su propia página en la que se podrán consultar sus canciones, información general sobre el grupo, y playlists en las que aparecen estos grupos.

- Tag: Será una etiqueta para Playlists y Artistas. Este será el parámetro por el que luego se harán las búsquedas.

## Información de los integrantes:

1.- Daniel Ribeiro Chacón

d.ribeiro@alumnos.urjc.es

DaniRibCha

2.- Rubén Iglesias García

r.iglesiasg@alumnos.urjc.es

RubenIgle

3.- Davide Fregonese

d.fregonese.2016@alumnos.urjc.es (github: fregonesedavide@gmail.com)

Frego22

4.- Stephanie Poleo

stephaniepoleo@hotmail.com

Steph Poleo

El mapa de Vistas se encuentra en la carpeta de Mapadevistas a la altura del readme en la raíz del proyecto.

A continuación se añade un link a youtube con un vídeo resumiendo las funcionalidades más importantes de la aplicación.

https://www.youtube.com/watch?v=hFN1iYU0L6E

 #### - Estructura del proyecto
 El proyecto ahora mismo está dividido en paquetes para mejorar la estructura y la eficiencia a la hora del desarrollo. Los paquetes son los siguientes:
 - Example: contiene el ejecutable del proyecto.
 - Classes: Contiene las entidades y sus correspondientes clases con metodos y atributos necesarios para realizar operaciones básicas con objetos de estas clases.
 - Controllers: Contiene los controladores que se usaron para crear una web con arquitectura tradicional.
 - Repositories: Contiene los repositorios correspondientes a las entidades del proyecto.
 - Restcontrollers: Contiene los controladores que se usaron para desarrollar la API Rest.
 - Security: Contiene las clases relacionadas con la seguridad del proyecto.
 - Services: Contiene las clases Service generadas en la fase de desarrollo de APi Rest.
 
Aquí se deja un enlace al documento API.md que contiene la información de cada recurso implementado en la fase de API Rest.
https://github.com/DaniRibCha/MusineDAW/blob/master/API.md

A continuación se muestran imagenes donde se refleja el diagrama de controllers (correspondientes al paquete controllers) y los templates. Los controllers estan representados en color verde mientras que cada template está representado con el color morado. Estos esquemas Template-Controlador valen tanto para la configuración de arquitectura de web tradicional como para la configuración con API Rest.

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Controllers_y_Templates/TemplatesNuevoEsquema.PNG"/>
</p>

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Controllers_y_Templates/Relacion%20PublicPage.PNG"/>
</p>

- A continuación se muestran los diagramas de clases de cada uno de los paquetes mencionados anteriormente. Cada paquete se ve en la imagen representado por la imagen de paquete usada en UML.

Aquí se muestra el diagrama de clases. Los Repositorios están en azul, los controllers en marrón, las clases component en amarillo.

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Paquete%20Controllers%20y%20Repositorios.png"/>
</p>

Las clases relacionadas con la seguridad se verán en color verde, las cajas azules representarán los repositorios y las clases component en amarillo.

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Paquete%20Security.PNG"/>
</p>

Aquí las clases Service se ven en color morado mientras que los repositorios siguen en color azul.

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Paquete%20Service.PNG"/>
</p>

A continuación se mostrarán las relaciones entre los controladores de tipo Rest y los Servicios y componentes apropiados. Ya que no hay una homogeneidad que se pueda aplicar a todos los controladores rest como pasa con los controladores y repositories, representaremos las relaciones con una tabla:

| Clases | 1 | 2 | 3 | 4 | 5 | 6 |
|--------|---|---|---|---|---|---|
| LoginRestController |  |  |  |  | X | X |
| RestAdminController | X |  | X | X | X | X |
| RestArtistController | X |  |  |  | X | X |
| RestPlaylistController | X | X | X | X | X | X |
| RestPublicPageController | X | X |  |  | X | X |
| RestSongController | X |  | X |  | X | X |
| RestUserController | X |  | X |  | X | X |

Las 'X' corresponderán a que la clase tiene un atributo de ese tipo Service con multiplicidad "0..1" como se indicaba en los demás paquetes.
- Cada numero corresponde a las siguientes clases Service o Component:
  - 1-ArtistaService
  - 2-TagService
  - 3-PlayistService
  - 4-SongService
  - 5-UserService
  - 6-UserComponent
  
Y por último aquí se muestra el diagrama con las relaciones entre entidades. Las relaciones que solo tienen multiplicidad se interpretan como que la relación A contiene a/es contenida por la relación B:

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Clases%20Simples.PNG"/>
</p>

A continuación se añaden los diagramas correpondientes a la parte realizada sobre angular. En el siguiente diagrama se muestran las clases que se han utilizado como servicio en esta última parte del proyecto:

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20angular/service.png"/>
</p>

Debajo se muestran las clases que han necesitado un modelo. 

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20angular/model.png"/>
</p>

Por último se muestra un resumen con todas las clases utilizadas para esta última parte del proyeccto que no refieren ni a la configuración del proyecto, ni a los modelos, ni a los servicios; ya definidos en las imágenes previas. Cada caja aquí debajo contiene dentro su propio fichero typeScript y su correspondiente vista HTML. 

En el caso de que una caja sea hija de otra significará que el nombre de la clase está compuesto de la siguiente manera:
padre-hijo.ts
padre-hijo.html

Si se diera el caso de que hubiera más de una relación padre-hijo encadenada el nombre pasaría a ser:
abuelo-padre-hijo.ts
abuelo-padre-hijo.html

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20angular/component.png"/>
</p>

En cuanto a la configuración del proyecto, las clases app.component.spec.ts , app.routing.ts y app.module.ts, hemos decidido no representarlas en el diagrama ya que son, en cierto modo, ajenas a todas la demás clases y no hay nigún lazo relevante (aparte de señalar importaciones de clases, rutas o declaraciones de los componentes).
