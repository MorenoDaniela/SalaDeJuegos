import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Usuario } from '../Clases/usuario';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {

  private usersLogged:string = '/userLogged';
  public isLogged:Boolean = false;
  public static userNameLogged:string;
  public static iudUserLogged:string;
  public Usuario: Usuario = new Usuario();

  UsuariosRef: AngularFirestoreCollection<any>;

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router, // Inject Firebase auth service
      public db:AngularFirestore,
      public toastr: ToastrService
  ) {
      this.UsuariosRef = db.collection(this.usersLogged);
  }

  // Sign in with Google
  GoogleAuth() {
      return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
          console.log('You have been successfully logged in!');
          console.log(provider);
          console.log(result.additionalUserInfo.profile);
          IngresarService.userNameLogged = result.additionalUserInfo.profile['name'];
          IngresarService.iudUserLogged = result.additionalUserInfo.profile['id'];
          this.isLogged = true;

          this.router.navigate(['home']);

      }).catch((error) => {
          console.log(error)
      })
  }

  //Auth with emailAndPassword
  loginWithEmailAndPassword(name:string,pass:string){
      this.afAuth.signInWithEmailAndPassword(name,pass)
          .then((result)=>{
            IngresarService.iudUserLogged = result.user.uid;
            IngresarService.userNameLogged = name;
              this.isLogged = true;
              console.log(this.isLogged);
              this.UsuariosRef.add({email:name,logged:Date.now()});
              this.Usuario.estaLogueado=true;
              this.showSuccessWithTimeout("Logueo exitoso.","Registro exitoso", 3000)
              this.router.navigate(['home']);
          })
          .catch((res)=>{
            this.Usuario.estaLogueado=false;
            this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
              this.router.navigate(['error']);
          });
  }

  registroWithEmailAndPassword(name:string,pass:string){
      this.afAuth.createUserWithEmailAndPassword(name,pass)
      .then((result)=>{
          this.showSuccessWithTimeout("Cuenta creada Exitosamente.","Registro exitoso", 3000)
          this.loginWithEmailAndPassword(name,pass);
      })
      .catch((res)=>{
        console.log(res);
        if (res.code == "auth/email-already-in-use"){
          this.Usuario.estaLogueado=false;
          this.showErrorWithTimeout("Usuario ya registrado", "Error", 3000)
          this.router.navigate(['error']);
        }else{
          this.Usuario.estaLogueado=false;
          this.showErrorWithTimeout("No se pudo crear su cuenta", "Error", 3000)
          this.router.navigate(['error']);
        }

      });

  }

  logout(){
    this.afAuth.signOut().then(()=>{
      this.Usuario.estaLogueado=false;
      this.router.navigate(['home']);
    });
  }

  showSuccessWithTimeout(message, title, timespan){
    this.toastr.success(message, title ,{
      timeOut :  timespan
    })
  }

  showErrorWithTimeout(message, title, timespan){
    this.toastr.error(message, title ,{
      timeOut :  timespan
    })
  }

}
