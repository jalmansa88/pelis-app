import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  pelicula: any;
  backTo: string;
  busqueda: string;

  constructor(public peliService: PelisService,
    public router: ActivatedRoute) {

  this.router.params.subscribe(params => {
    this.backTo = params['pag'];

    if (params['busqueda']) {
      this.busqueda = params['busqueda'];
    }

    this.peliService.getPelicula(params['id'])
        .subscribe(peli => {
          this.pelicula = peli;
        });
  });
}

  ngOnInit() {
  }

}
