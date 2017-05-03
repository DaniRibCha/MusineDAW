import { User } from './user.model';
import { Tag } from './tag.model';
import { Song } from './song.model';

export interface Playlist {
    id_playlist?: number;
    title: string;
    creatorName:string;
    creatorId:number;
    nLikes?:number;
    nTracks?:number;
    date?:Date;
    description?: string;
    songsOfPlaylist?: Song[];
    tagsOfPlaylist?: Tag[];
    userlikesOfPlaylist?: User[];
    isIdLogged?:boolean;
    likedByLogged?:boolean;
}