import { Component, OnInit } from '@angular/core';
import { PelisService } from '../../services/pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cartelera: any;
  populares: any;
  infantiles: any;
  
  constructor(public pelisService: PelisService) {

    this.pelisService.getCartelera()
        .subscribe((data: any) => this.cartelera = data);

    this.pelisService.getPopulares()
        .subscribe((data: any) => this.populares = data);

    this.pelisService.getPopularesNinos()
        .subscribe((data: any) => this.infantiles = data);
  }

  ngOnInit() {
  }

}
