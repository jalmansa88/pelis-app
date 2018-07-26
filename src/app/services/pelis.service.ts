import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PelisService {
  
  private apiKey = 'e4eee526fe8826af80bc0f80ab7e098d';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor(private http: HttpClient) { }

  getCartelera() {
  
    const from = new Date();
    const to = new Date();
    to.setDate(to.getDate() + 6);

    const fromStr = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    const toStr = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;

    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${fromStr}&primary_release_date.lte=${toStr}&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, '')
          .pipe(map((data: any) => data.results));
  }

  getPopulares() {

    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, '')
          .pipe(map((data: any) => data.results));
  }

  getPopularesNinos() {

    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, '')
          .pipe(map((data: any) => data.results));
  }

  buscarPeliculas(text: string) {
    const url = `${this.urlMovieDb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '')
      .pipe(map((res: any) => {
        console.log(res);
        
        this.peliculas = res.results;
        return res.results;
      }));
  }

  getPelicula(id: string) {
    const url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, '')
          .pipe(map((data: any) => data));
  }
}
