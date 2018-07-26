import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {

    const imgUrl = 'http://image.tmdb.org/t/p/w300';
    
    if (pelicula && pelicula.backdrop_path) {
      return imgUrl + pelicula.backdrop_path;

    } else {
      if (pelicula && pelicula.poster_path) {
        return imgUrl + pelicula.poster_path;
      }
    }

    return 'assets/img/noimage.jpg';
  }

}
