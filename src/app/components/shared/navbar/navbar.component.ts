import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  buscarAl( termino: string) {
    console.log('ENTRO Y CHAO');
    console.log(termino); // en vez de mostrar devuelvo
 //   this.router.navigate( ['/buscar', termino ]);
    this.router.navigate( ['/buscar' , termino]);
  }
  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log(event);
    }
  }
}


