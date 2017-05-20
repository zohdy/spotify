import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService
{
  private searchURL : string;
  private artistURL : string;
  private albumsURL : string;
  private albumURL : string;

  constructor(private httpRequest: Http)
  {

  }

  searchMusic(userInput : string, type='artist')
  {
    this.searchURL = 'https://api.spotify.com/v1/search?query='+userInput+'&offset=0&limit=20&type='+type+'&market=US';

    return this.httpRequest.get(this.searchURL).map(response => response.json());
  }

  getArtist(id : string)
  {
    this.artistURL = 'https://api.spotify.com/v1/artists/'+id;

    return this.httpRequest.get(this.artistURL)
      .map(response => response.json());
  }

  getAlbums(artistId: string)
  {
    this.albumsURL = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';

    return this.httpRequest.get(this.albumsURL)
      .map(response => response.json());
  }

  getAlbum(id: string)
  {
    this.albumURL = 'https://api.spotify.com/v1/albums/'+id;

    return this.httpRequest.get(this.albumURL)
      .map(response => response.json());
  }
}
