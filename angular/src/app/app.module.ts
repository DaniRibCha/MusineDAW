import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-playlist.component';
import { LoginComponent } from './login.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { SearchComponent } from './search.component';
import { PlaylistService } from './playlist.service';
import { ArtistService } from './artist.service';
import { TagService } from './tag.service';
import { UserService } from './user.service';
import { SongService } from './song.service';
import { LoginService } from './login.service';
import { routing }  from './app.routing';

@NgModule({
  declarations: [AppComponent,PlaylistDetailComponent, HomeComponent,LoginComponent,SearchComponent,ArtistDetailComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  bootstrap: [AppComponent],
  providers: [PlaylistService,ArtistService,TagService,UserService,SongService,LoginService]
})
export class AppModule { }

