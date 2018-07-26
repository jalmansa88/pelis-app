import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaPoster'
})
export class PeliculaPosterPipe implements PipeTransform {

  transform(pelicula: any): any {
    const imgUrl = 'http://image.tmdb.org/t/p/w300';
      return imgUrl + pelicula.poster_path;
  }
}
