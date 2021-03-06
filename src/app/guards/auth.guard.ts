import { SnackbarService } from './../services/snackbar.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private snackbarService:SnackbarService,
    private router: Router,
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.appUser$.pipe(map(user => {
      if (user) {
        return true;
      }
      this.snackbarService.showSnackBar('Login required');
     
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }));
  }
}
