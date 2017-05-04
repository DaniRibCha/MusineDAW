import { User } from './user.model';
import { Artist } from './artist.model';
import { Playlist } from './playlist.model';

export interface Song {
    id_song?: number;
    title: string;
    link_youtube: string;
    artistsOfSong?:Artist[];
    playlistsOfSong?:Playlist[];
    usersFavoriteSong?:User[];
    isIdLogged?:boolean;
}