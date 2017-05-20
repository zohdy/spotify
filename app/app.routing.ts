import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { AboutComponent } from './Components/About/about.component';
import { ArtistComponent } from './Components/Artist/artist.component';
import { AlbumComponent } from './Components/Album/album.component';


const appRoutes : Routes = [

  { path: '', component : HomeComponent},
  { path: 'artist/:id', component : ArtistComponent},
  { path: 'about', component : AboutComponent},
  { path: 'album/:id', component : AlbumComponent},
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
