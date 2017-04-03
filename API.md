# Documentación sobre la API
- Aquí se mostrarán todos los datos relevantes a cada acción que se pueda realizar a través de la API. A continuación se muestran los códigos de error utilizados:
  - **200**: OK, se lanza este codigo de estado cuando no ha habido ningún problema con la petición.
  - **401**: UNATHORIZED, este error se da cuando un usuario está intentando acceder al perfil de otro usuario.
  - **404**: NOT_FOUND, se lanza este codigo de error cuando se esta intentado acceder a un elemento que no existe.

- #### LoginRestController
| *URL* | *Salida* |
|-------|--------|
| /api/logOut | Confirmación |
| /api/logIn | Confirmación |

- #### RestAdminController
| *Acción* | *URL* | *Método* | *Body* | *Salida* |
|----------|-------|----------|--------|----------|
| Editar un artista | /api/Artist/{id} | PUT | |
| Crear un artista | /api/AdminCreateArtist | POST | Artista | Artista |
| Crear un cancion para un artista | /api/AdminCreateSongOfArtist/{idArtist} | POST | Cancion | Cancion |
| Añadir artista a una cancion | Artista |/api/AdminAddArtistInSong/{idSong} | PUT | | Artista |
| Borrar artista de uan cancion | /api/AdminRemoveArtistBySong/{idSong} | PUT | | Artista |
| Editar una cancion | /api/AdminEditSong/{idSong} | PUT | | Cancion |

- #### RestArtistController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener un artista | /api/Artist/{id} | GET | Artista |
| Obtener Top3 de artistas | /api/AdminCreateArtist | POST | Lista de Artistas |
| Obtener seguidores de un artista | /api/ArtistFollowers/{id} | GET | Lista de Usuarios |
| Obtener canciones de un artista | /api/SongsOfArtist/{id} | GET | Lista de Canciones |
| Dejar de/Seguir a un artista | /api/FollowNotFollowArtist/{idArtist} | PUT | Confirmacion |


- #### RestPlaylistController
| *Acción* | *URL* | *Método* | *Body* | *Salida* |
|----------|-------|----------|--------|----------|
| Crear Playlist | /api/CreatePlaylist/{id} | POST | Playlist | Playlist |
| Editar Playlist | /api/EditPlaylist/{idPlaylist} | PUT | | Confirmacion |
| Borrar Playlist | /api/DeletePlaylist/{idPlaylist} | DELETE | | Confirmacion |
| Obtener Top3 de playlists | /api/Top3Playlist | POST | | Lista de Playlists |
| Obtener 100 primeras playlists | /api/WallPlaylistsLogged/{id} | POST | | Lista de Playlists |
| Obtener 100 primeras playlists | /api/WallPlaylistsNotLogged | POST | | Lista de Playlists |
| Obtener una playlist de un usuario | /api/Playlist/{id} | GET | |Playlist |
| Obtener playlist del usuario registrado | /api/MyPlaylists/{id} | GET | | Lista de Playlists |
| Obtener tags de una playlist | /api/PlaylistTags/{id} | GET | | Lista de Tags de una Playlist |
| Me gusta/No me gusta una cancion | /api/LikeUnlikePlaylist/{idPlaylist} | PUT ||  Confirmacion |



- #### RestPublicPageController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener seguidores de un usuario | /api/UserFlollowers/{id} | GET | Lista de Usuarios |
| Obtener playlists de un usuario | /api/UserPlaylists/{id} | GET | Lista de Playlists de un Usuario |
| Obtener playlists gustados por un usuario | /api/UserLikes/{id} | GET | Lista de Playlists |
| Obtener canciones favoritas de un usuario | /api/UserFavorites/{id} | GET | Lista de Canciones |
| Obtener playlist según tag | /api/SearchPlaylistByTag/{id} | GET | Lista de Playlists |
| Obtener playlist según titulo de playlist | /api/SearchPlaylistByTitle/{id} | GET | Lista de Playlists |
| Obtener playlist según Artista | /api/SearchPlaylistByArtist/{id} | GET | Lista de Playlists |
| Obtener playlist según palabra | /api/SearchPlaylist/{key} | GET | Lista de Playlists |
| Obtener el Top3 de tags | /api/Top3Tags | GET | Lista de Tags |


- #### RestSongController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener canciones de un artista | /api/Song/{id} | GET | Cancion |
| Desmarcar/Marcar cancion como favorita | /api/FavoriteNotFavoriteSong/{idSong} | PUT | Confirmacion |

- #### RestUserController
| *Acción* | *URL* | *Método* | *Salida* |
|----------|-------|----------|----------|
| Obtener canciones de un artista | /api/ConfigUserData/{id} | PUT | Cancion |
| Dejar de/Seguir a un usuario | /api/FollowNotFollowUser/{idUserToFollow} | PUT | Confirmacion |

