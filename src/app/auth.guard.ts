import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuare implements CanActivate, CanActivateChild {
  result: any;
  url: string[] = ['/']

  constructor(private authService: AuthService, private router: Router) {}

  // methods
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.result = this.authService.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      } else {
        if (this.router.url === '/about') {
          this.url = ['/about']
        }
        this.router.navigate(this.url, {
          queryParams: {
            auth: false,
          },
        });
        return;
      }
    });
    return this.result;
  }
}
