# Documentación sobre la API
- Aquí se mostrarán todos los datos relevantes a cada acción que se pueda realizar a través de la API. A continuación se muestran los códigos de error utilizados:
  - **401**: UNATHORIZED, este error se da cuando un usuario está intentando acceder al perfil de otro usuario.
  - **200**: OK, se lanza este codigo de estado cuando no ha habido ningún problema con la petición.

- #### LoginRestController
| *URL* | *Salida* |
|-------|--------|
| /api/logOut | Confirmación |
| /api/logIn | Confirmación |


- #### RestArtistController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener un artista | /api/Artist/{id} | GET | Artista |
| Obtener seguidores de un artista | /api/ArtistFollowers/{id} | GET | Lista de Usuarios |
| Obtener canciones de un artista | /api/SongsOfArtist/{id} | GET | Lista de Canciones |


- #### RestPlaylistController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener una playlist de un usuario | /api/Playlist/{id} | GET | Playlist |
| Obtener playlist del usuario registrado | /api/MyPlaylists/{id} | GET | Lista dePplaylists |
| Obtener tags de una playlist | /api/PlaylistTags/{id} | GET | Lista de Tags de una Playlist |


- #### RestPublicPageController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener seguidores de un usuario | /api/UserFlollowers/{id} | GET | Lista de Usuarios |
| Obtener usuarios seguidos por un usuario | /api/UserFollowing/{id} | GET | Lista de Usuarios |
| Obtener playlists de un usuario | /api/UserPlaylists/{id} | GET | Lista de Playlists de un Usuario |
| Obtener playlists gustados por un usuario | /api/UserLikes/{id} | GET | Lista de Playlists |
| Obtener canciones favoritas de un usuario | /api/UserFavorites/{id} | GET | Lista de Canciones |
| Obtener playlist según tag | /api/SearchPlaylistByTag/{id} | GET | Lista de Playlists |
| Obtener playlist según titulo de playlist | /api/SearchPlaylistByTitle/{id} | GET | Lista de Playlists |
| Obtener playlist según Artista | /api/SearchPlaylistByArtist/{id} | GET | Lista de Playlists |


- #### RestPublicPageController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener canciones de un artista | /api/Song/{id} | GET | Cancion |
