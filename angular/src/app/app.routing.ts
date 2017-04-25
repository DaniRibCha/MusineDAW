import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-playlist.component';
import { LoginComponent } from './login.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { SearchComponent } from './search.component';

const appRoutes = [
  { path: 'playlist/:id_playlist', component: PlaylistDetailComponent},
  { path: 'artist/:id_artist', component: ArtistDetailComponent},
  { path: 'search/:key', component: SearchComponent},
  { path: 'new', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);
