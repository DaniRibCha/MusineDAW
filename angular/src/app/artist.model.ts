import { User } from './user.model';
import { Tag } from './tag.model';
import { Song } from './song.model';

export interface Artist {
    id_artist?: number;
    name: string;
    country: string;
    followers?:number;
    songsOfArtist?:Song[];
    followersOfArtist?:User[];
    tagsOfArtist?:Tag[];
    idLogged?:boolean;
}