import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token: any = localStorage.getItem('token');

    /*const { userName, rodeId } = decode(token);
    if(!this.authService.isAuth() || roleId !== expectedRole) {
      console.log('Usuario no autorizado para la vista');
      return false;
    }
    */

    return true;
  }

}
