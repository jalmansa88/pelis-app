import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  @Input() peliculas;
  @Input() titulo;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
