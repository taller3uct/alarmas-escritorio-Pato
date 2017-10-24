import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  termino: String;
  constructor( private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    console.log(this.termino);
  });

}
}

