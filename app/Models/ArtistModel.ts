import {AlbumModel} from './AlbumModel';

export class ArtistModel
{
    id: number;
    name: string;
    genres:any;
    albums: AlbumModel[];
}
