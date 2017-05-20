import { Component } from '@angular/core';
import { SpotifyService } from '../../Services/spotify.service';
import { ArtistModel } from "../../Models/ArtistModel";


@Component({
  moduleId: module.id, //Used for locating relative paths
  selector: 'home',
  templateUrl:'home.component.html'
})

export class HomeComponent
{
  searchString: string;
  searchResult : ArtistModel[];

  constructor(private spotifyService : SpotifyService)
  {

  }

    searchMusic()
    {
      this.spotifyService.searchMusic(this.searchString).subscribe(response =>
      {
        this.searchResult = response.artists.items;
      })
    }
}
