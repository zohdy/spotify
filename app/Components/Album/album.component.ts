import {Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../Services/spotify.service';
import { AlbumModel } from '../../Models/AlbumModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id, //Used for locating relative paths
  selector: 'album',
  templateUrl:'album.component.html'
})

export class AlbumComponent implements OnInit
{
  id: string;
  album: AlbumModel[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute)
  {
  }

  ngOnInit()
  {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
      {

        this.spotifyService.getAlbum(id)
          .subscribe(album =>
          {

            this.album = album;
          })

      })

  }
}

