import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-playlist.component';
import { LoginComponent } from './login.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';
import {UserPlaylistComponent} from './user-playlist.component';
import {UserLikeComponent} from './user-likes.component';
import {UserFavoriteComponent} from './user-favorites.component'
import { SearchComponent } from './search.component';

const appRoutes = [
  { path: 'playlist/:id_playlist', component: PlaylistDetailComponent},
  { path: 'artist/:id_artist', component: ArtistDetailComponent},
  { path: 'user-playlist/:id_user', component: UserPlaylistComponent},
  { path: 'user-likes/:id_user', component: UserLikeComponent},
  { path: 'user-favorites/:id_user', component: UserFavoriteComponent},
  { path: 'search/:key', component: SearchComponent},
  { path: 'new', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);
