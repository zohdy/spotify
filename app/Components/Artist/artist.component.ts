import {Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../Services/spotify.service';
import { ArtistModel } from '../../Models/ArtistModel';
import { AlbumModel } from '../../Models/AlbumModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id, //Used for locating relative paths
  selector: 'artist',
  templateUrl:'artist.component.html'
})

export class ArtistComponent implements OnInit
{
    id: string;
    artist: ArtistModel[];
    albums: AlbumModel[];

    constructor(private spotifyService : SpotifyService, private route : ActivatedRoute)
    {

    }

    ngOnInit()
    {
        this.route.params
          .map(params => params['id'])
          .subscribe((id) => {

            this.spotifyService.getArtist(id)
              .subscribe(artist => {

                  this.artist = artist;
              })

            this.spotifyService.getAlbums(id)
              .subscribe(albums => {

                this.albums = albums.items;
              })
    })

    }
}
