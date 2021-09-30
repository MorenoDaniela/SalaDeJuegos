import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';
import { EncuestaService } from 'src/app/Servicios/encuesta.service';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  Usuario: Usuario = new Usuario();
  formulario: FormGroup;
  constructor(public authService: IngresarService, public fb: FormBuilder, public encuestaService: EncuestaService) 
  { 
    this.formulario=fb.group({
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      edad:["", [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono:["", [Validators.required,this.validarLargo, this.validarTelefono]],
      gusto:["", Validators.required],
      juegos:["", Validators.required],
      opinion:["", Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario  = this.authService.getItemLocal();
    }
  }

  aceptar()
 {
  //  console.log(this.formulario);
   const nombre = this.formulario.controls['nombre'].value;
   const apellido = this.formulario.controls['apellido'].value;
   const edad = this.formulario.controls['edad'].value;
   const telefono = this.formulario.controls['telefono'].value;
   const juegos = this.formulario.controls['juegos'].value;
   const gusto = this.formulario.controls['gusto'].value;
   const opinion = this.formulario.controls['opinion'].value;
  //  console.log("nombre "+nombre+" apellido "+apellido+" edad "+edad+" telefono "+telefono+ " juegos " +juegos+ " gusto "+gusto+ " opinion "+opinion);
   this.encuestaService.enviarRespuestas(this.Usuario.id,this.Usuario.email, nombre, apellido, edad, telefono, juegos, gusto, opinion);
   this.authService.showSuccessWithTimeout("Envio exitoso","Tus respuestas fueron enviadas con exito.",2000);
 } 

 validarTelefono(control: AbstractControl)
 {
   const telefono = control.value;
   const estaMal = parseInt(telefono);
   console.log(estaMal);
   if (!estaMal)
   {
     return {estaMal:true};
   }
   return null;
 }

validarLargo(control:AbstractControl)
{
  const telefono = control.value;
  const maximoPermitido = telefono.length;
  if (maximoPermitido>10)
  {
    return {maximo:true}
  }
  return null;
}

}
