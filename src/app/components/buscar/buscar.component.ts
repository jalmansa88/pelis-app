import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  buscar: string;

  constructor(public peliService: PelisService,
              public router: ActivatedRoute) {
  
  this.router.params.subscribe(params => {
    if (params['txt']) {
      this.buscar = params['txt'];
      this.buscarPelicula();
    }

    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    
    if (!this.buscar) {
      return;
    }

    this.peliService.buscarPeliculas(this.buscar)
        .subscribe((response) => {

        });
  }

}
