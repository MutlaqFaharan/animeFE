import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from './toast.service';
import decode from 'jwt-decode';
import { TokenPayload } from '../shared/interfaces/http-response/token-payload.interface';
import { Role } from '../shared/enums/role.enum';
import { checkNullability } from '../shared/util/check-nullability.util';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private readonly toast: ToastService,
    private readonly translate: TranslateService,
    private readonly router: Router
  ) {}

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): any {
    const token = localStorage.getItem('token');
    return token ? token : undefined;
  }

  initLoggedInUser(token: string) {
    this.token = token;
    this.toast.showSuccess(
      this.translate.instant('common.success'),
      this.translate.instant('success.login')
    );
    this.redirectToRoleByToken();
  }

  redirectToRoleByToken() {
    debugger;
    if (!checkNullability(this.token)) this.toast._noLoggedInUser();
    const tokenPayload: TokenPayload = decode(
      this.token as string
    ) as TokenPayload;
    switch (+tokenPayload.role) {
      case Role.Admin:
        this.router.navigate(['feed/admin']);
        break;
      case Role.QA:
        this.router.navigate(['feed/qa']);
        break;
    }
  }
}
