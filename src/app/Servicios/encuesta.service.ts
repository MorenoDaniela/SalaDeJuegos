import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private encuesta:string = '/encuesta';
  EncuestaRef: AngularFirestoreCollection<any>;
  constructor(public afAuth: AngularFireAuth, public router: Router, public db:AngularFirestore)
  {
    this.EncuestaRef = db.collection(this.encuesta, ref => ref.orderBy('edad'));
  }

  enviarRespuestas(id: string, email:string, nombre:string, apellido:string,edad:number,telefono:string,juego:string,gusto:string,opinion:string){
    this.EncuestaRef.add(
      { id:id,
        email:email,
        nombre:nombre,
        apellido:apellido,
        edad:edad, 
        telefono:telefono,
        juegoPreferido:juego,
        gusto:gusto, 
        opinion:opinion,
        fechaEncuesta:new Date().toLocaleString()});
  }

}
