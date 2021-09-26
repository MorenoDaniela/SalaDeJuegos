import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private resultados:string = '/resultados';
  ResultadosRef: AngularFirestoreCollection<any>;
  listadoResultadosMostrar: any;

  constructor(public afAuth: AngularFireAuth, public router: Router, public db:AngularFirestore)
  {
    this.ResultadosRef = db.collection(this.resultados, ref => ref.orderBy('puntaje','desc'));
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.ResultadosRef;
  }

  enviarResultado(puntaje:number, id: string, email:string, tipoDeJuego:string){
    this.ResultadosRef.add(
      {email:email,
        puntaje:puntaje,
        id:id,
        tipoDeJuego:tipoDeJuego,
        fechaPuntaje:new Date().toLocaleString()});
  }
}
