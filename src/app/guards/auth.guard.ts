import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VariablesService } from '../core/services/variables.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private variablesService: VariablesService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(state.url + " " + this.variablesService.getCurrentUser());
    if(!this.variablesService.getCurrentUser() && state.url !== '/register') {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
