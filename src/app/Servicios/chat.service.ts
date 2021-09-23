import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private mensajes:string = '/mensajes';
  MensajesRef: AngularFirestoreCollection<any>;
  listadoMensajesMostrar: any;
  constructor(public afAuth: AngularFireAuth, public router: Router, public db:AngularFirestore, public toastr: ToastrService)
  {
    this.MensajesRef = db.collection(this.mensajes, ref => ref.orderBy('fechaMensaje'));
    // this.MensajesRef = db.collection(this.mensajes, ref => ref.where('id','==','unid'));
  }

 getMensajes(): AngularFirestoreCollection<any> {
  return this.MensajesRef;
}




  getAll(): AngularFirestoreCollection<any> {
    return this.MensajesRef;
  }





  enviarMensaje(mensaje:string, id: string, email:string){
    this.MensajesRef.add(
      {email:email,
        mensaje:mensaje,
        id:id,
        fechaMensaje:new Date().toLocaleString()});
  }
}
