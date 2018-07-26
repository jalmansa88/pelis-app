import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';

import { PelisService } from './services/pelis.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

import { GalleryComponent } from './components/home/gallery.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { PeliculaPosterPipe } from './pipes/pelicula-poster.pipe';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GalleryComponent,
    PeliculaPosterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PelisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
