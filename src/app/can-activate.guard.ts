import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IngresarService } from './Servicios/ingresar.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(public ingresarService: IngresarService, public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.ingresarService.getItemLocal()!=null) {
            return true
        }else
        {
          return false;
        }
        
  }
  
}
