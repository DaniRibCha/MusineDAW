import { Playlist } from './playlist.model';
import { Artist } from './artist.model';
import { Song } from './song.model';

export interface User {
    id_user?: number;
    name: string;
    country: string;
    biography: string;
    city: string;
    passwordHash: string;
    email: string;
    profileImage: string;
    isIdLogged:boolean;
    favoriteSongs:Song[];
    createdPlaylists:Playlist[];
    likedPlaylists:Playlist[];
    roles: string[];
    followingArtists:Artist[];
    following:User[];
    followers:User[];
}