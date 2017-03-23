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

El mapa de Vistas se encuentra en la carpeta de Mapadevistas a la altura del readme.

A continuación se muestran imagenes donde se refleja el diagram de controllers y templates. Los controllers estan representados en color verde mientras que cada template está representado con el color morado.

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Controllers_y_Templates/AdminController.PNG"/>
</p>

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Controllers_y_Templates/WebController.PNG"/>
</p>

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Controllers_y_Templates/MainController.PNG"/>
</p>

Aquí se muestra el diagrama de clases. Los Repositorios están en azul, los controllers en marrón, los componentes en amarillo, y lo relacionado con la seguridad en verde, excepto la autenticación que está en color rojo:

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/AdminyWebControllers.PNG"/>
</p>

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Controllers%20de%20Entidades.PNG"/>
</p>

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/UploadandSecurity.PNG"/>
</p>

Y por último aquí se muestra el diagrama con las relaciones entre entidades. Las relaciones que solo tienen multiplicidad se interpretan como que la relación A contiene a/es contenida por la relación B:

<p align="center">
  <img src="https://github.com/DaniRibCha/MusineDAW/blob/master/Mapa%20de%20vistas/Diagrama%20de%20clases/Clases%20Simples.PNG"/>
</p>
