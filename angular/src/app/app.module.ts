import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-playlist.component';
import { LoginComponent } from './login.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistFollowersComponent } from './artist-followers.component';
import {UserPlaylistComponent} from './user-playlist.component'
import {UserLikeComponent} from './user-likes.component'
import {UserFavoriteComponent} from './user-favorites.component'
import { SearchComponent } from './search.component';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { UserService } from './user.service';
import { SongService } from './song.service';
import { LoginService } from './login.service';
import { routing }  from './app.routing';
import { MyNavbarComponent } from './mynavbar.component';
import {DropdownModule} from "ngx-dropdown";
import {MyPlaylistsComponent} from './my-playlists.component';
import {MyLikesComponent} from './my-likes.component';
import {MyFavoritesComponent} from './my-favorites.component';
import {EditPlaylistComponent} from './edit-playlist.component';
import {CreatePlaylistComponent} from './create-playlist.component';
import {MyFollowersComponent} from './my-followers.component';
import {MyFollowingComponent} from './my-following.component';
import {UserFollowersComponent} from './user-followers.component';
import {UserFollowingComponent} from './user-following.component';

@NgModule({
  declarations: [AppComponent,PlaylistDetailComponent, HomeComponent,LoginComponent,SearchComponent,
  UserPlaylistComponent,ArtistDetailComponent,UserLikeComponent,UserFavoriteComponent, MyNavbarComponent,
  MyPlaylistsComponent,MyLikesComponent,MyFavoritesComponent,EditPlaylistComponent,CreatePlaylistComponent,
  ArtistFollowersComponent,MyFollowersComponent,MyFollowingComponent,UserFollowersComponent,UserFollowingComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing,DropdownModule],
  bootstrap: [AppComponent],
  providers: [PlaylistService,ArtistService,TagService,UserService,SongService,LoginService]
})
export class AppModule { }

