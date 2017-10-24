import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  termino: String;
  alarmas: Observable<any[]> ;
  fecha: Date;
  prueba: any;

  public descripcion: any = [];
  public lat: any = [];
  public tiempo: any = [];
  public tipo: any = [];

  static buscarAL (termino: String, num: any) {
    const Nfecha = new Date(num) ;
    termino = termino.toLocaleLowerCase();
    return Nfecha;

  }
condicion(con: any) {
  if ( con !== '') {
    return(con);
  }

}
  pregunta (termino: String, variable: any) {
    // console.log(this.termino);
    if (variable.indexOf(termino) >= 1) {
      return(variable);
    }
    // tslint:disable-next-line:one-line
    else {
      return('');
    }
  }

  constructor( private activatedRoute: ActivatedRoute,
               db: AngularFireDatabase) {
                this.alarmas = db.list('alertas').valueChanges();
    //            this.prueba =  db.list('alertas', ref => ref.startAt('k'));
               // console.log(this.prueba);
//                this.db.list('/lat');
//                this.db.list('/tiempo');
//                this.db.list('/tipo');

               }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    console.log(this.termino);
    this.fecha = BuscadorComponent.buscarAL(this.termino, 22);
 //   console.log(this.fecha);
// console.log(this.alarmas);
  });

}


}

