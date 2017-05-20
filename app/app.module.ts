import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { AppComponent }  from './app.component';
import { AboutComponent } from './Components/About/about.component';
import { HomeComponent } from './Components/Home/home.component';
import { routing } from './app.routing';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArtistComponent } from './Components/Artist/artist.component';
import { SpotifyService } from './Services/spotify.service';
import { AlbumComponent } from './Components/Album/album.component';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, HomeComponent, ArtistComponent, AlbumComponent, NavbarComponent, AboutComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ SpotifyService ]
})

export class AppModule { }
