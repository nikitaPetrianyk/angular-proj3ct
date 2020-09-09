import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../modules/login/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.localId$.value ? true : this.setAccessDenied();
  }

  private setAccessDenied(): boolean {
    this.authService.logOut();
    this.router.navigate(['/login'], {
      queryParams: {
        loginAgain: true
      }
    });
    return false;
  }
}
