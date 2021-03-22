import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuardService implements CanActivate{
  
    constructor(public router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!sessionStorage.getItem('loggedInUser')) {
        this.router.navigate(['home']);
        return false;
      }
      return true;
    }
}
