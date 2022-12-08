import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { checkNullability } from '../shared/util/check-nullability.util';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const requiredRoles = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    if (!checkNullability(token)) return false;
    const tokenPayload = decode(token as string, { header: true }) as any;
    if (
      !this.auth.isAuthenticated() ||
      !requiredRoles.some((role: string) =>
        [+tokenPayload.role].includes(+role)
      )
    ) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
