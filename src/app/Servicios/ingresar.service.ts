import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as firebase from 'firebase';
import { Usuario } from '../Clases/usuario';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresarService{

  private usuarios:string = '/usuarios';
  // public estaLogueado:Boolean = false;
  // public static usuarioNombreLogueado:string;
  // public static idUsuarioLogueado:string;
  public Usuario: Usuario = new Usuario();

  public User : any;
  UsuariosRef: AngularFirestoreCollection<any>;

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router, // Inject Firebase auth service
      public db:AngularFirestore,
      public toastr: ToastrService
  ) {
      this.UsuariosRef = db.collection(this.usuarios);
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
          this.Usuario.nombre = result.additionalUserInfo.profile['email'];
          this.Usuario.id = result.additionalUserInfo.profile['id'];
          this.Usuario.email = result.additionalUserInfo.profile['email'];
          this.Usuario.estaLogueado = true;

          this.router.navigate(['home']);

      }).catch((error) => {
          console.log(error)
      })
  }

  //Auth with emailAndPassword
  loginWithEmailAndPassword(email:string,pass:string){
      this.afAuth.signInWithEmailAndPassword(email,pass)
          .then((result)=>{
            this.Usuario.id = result.user.uid;
            this.Usuario.email = email;
            this.Usuario.fecha= new Date().toLocaleString();
            this.Usuario.estaLogueado=true;
           this.setItemLocal();
              this.UsuariosRef.add(
                {email:email,
                  fechaLogueo:new Date().toLocaleString(),
                  id:result.user.uid});
              // this.Usuario.estaLogueado=true;
              this.showSuccessWithTimeout("Logueo exitoso.","Te logueaste", 3000)
              this.router.navigate(['home']);
          })
          .catch((res)=>{
            this.Usuario.estaLogueado=false;
            // this.Usuario.estaLogueado=false;
            this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
              this.router.navigate(['error']);
          });
  }

  registroWithEmailAndPassword(email:string,pass:string){
      this.afAuth.createUserWithEmailAndPassword(email,pass)
      .then((result)=>{
          this.showSuccessWithTimeout("Cuenta creada Exitosamente.","Registro exitoso", 3000)
          this.loginWithEmailAndPassword(email,pass);
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
      this.Usuario.email=null;
      this.Usuario.password=null;
      this.Usuario.fecha=null;
      // this.router.navigate(['ingreso/login']);
    });
    localStorage.removeItem('usuarioApp');
    this.router.navigate(['home']);

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

  estaLogueado()
  {
   this.afAuth.onAuthStateChanged(user=> {
      if (user){
        this.User = user;
      }else
      {
        this.User=null;
      }
    });
    return this.User;
  }

  setItemLocal()
  {
    localStorage.setItem('usuarioApp',JSON.stringify(this.Usuario));
  }

  getItemLocal()
  {
    var user = localStorage.getItem('usuarioApp');
    if (user!=null)
    {
      return JSON.parse(user);
    }else{
      return null;
    }

    
  }

}
