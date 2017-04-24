import { Artist } from './artist.model';
import { Playlist } from './playlist.model';

export interface Tag {
    id_tag?: number;
    name: string;
    numberTag:number;
    artistsOfTag:Artist[];
    playlistsOfTag:Playlist[];
}