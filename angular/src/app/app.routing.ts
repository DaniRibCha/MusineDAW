import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-playlist.component';
import { LoginComponent } from './login.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistFollowersComponent } from './artist-followers.component';
import {UserPlaylistComponent} from './user-playlist.component';
import {UserLikeComponent} from './user-likes.component';
import {UserFavoriteComponent} from './user-favorites.component'
import { SearchComponent } from './search.component';
import {MyPlaylistsComponent} from './my-playlists.component';
import {MyLikesComponent} from './my-likes.component';
import {MyFavoritesComponent} from './my-favorites.component';
import {EditPlaylistComponent} from './edit-playlist.component';
import {CreatePlaylistComponent} from './create-playlist.component';
import {MyFollowersComponent} from './my-followers.component';
import {MyFollowingComponent} from './my-following.component';
import {UserFollowersComponent} from './user-followers.component';
import {UserFollowingComponent} from './user-following.component';
import {ConfigComponent} from './config.component';
import {AdminHomeComponent} from './admin-home.component';
import {AdminCreateArtistComponent} from './admin-create-artist.component';
import {AdminEditArtistComponent} from './admin-edit-artist.component';
import {AdminEditSongComponent} from './admin-edit-song.component';
import {AdminCreateSongComponent} from './admin-create-song.component';
import {SignInComponent} from './sign-in.component';

const appRoutes = [
  { path: 'playlist/:id_playlist', component: PlaylistDetailComponent},
  { path: 'artist/:id_artist', component: ArtistDetailComponent},
  { path: 'artist-followers/:id_artist', component: ArtistFollowersComponent},
  { path: 'user-playlist/:id_user', component: UserPlaylistComponent},
  { path: 'user-likes/:id_user', component: UserLikeComponent},
  { path: 'user-favorites/:id_user', component: UserFavoriteComponent},
  { path: 'my-playlists/:id_user', component: MyPlaylistsComponent},
  { path: 'my-likes/:id_user', component: MyLikesComponent},
  { path: 'my-favorites/:id_user', component: MyFavoritesComponent},
  { path: 'my-followers/:id_user', component: MyFollowersComponent},
  { path: 'my-following/:id_user', component: MyFollowingComponent},
  { path: 'user-followers/:id_user', component: UserFollowersComponent},
  { path: 'user-following/:id_user', component: UserFollowingComponent},
  { path: 'search/:key', component: SearchComponent},
  { path: 'config/:id_user', component: ConfigComponent},
  { path: 'edit-playlist/:id_playlist', component: EditPlaylistComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent},
  { path: 'admin-home', component: AdminHomeComponent},
  { path: 'admin-create-artist', component: AdminCreateArtistComponent},
  { path: 'admin-edit-artist/:id_artist', component: AdminEditArtistComponent},
  { path: 'admin-edit-song/:id_song', component: AdminEditSongComponent},
  { path: 'admin-create-song/:id_artist', component: AdminCreateSongComponent},
  { path: 'new', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);
