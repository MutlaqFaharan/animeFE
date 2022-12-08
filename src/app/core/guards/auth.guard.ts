import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly toastService: ToastService,
    private readonly translate: TranslateService
  ) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      let translationSubscriber$ = this.translate
        .get('common.error', 'errors.auth')
        .subscribe((translated: string) => {
          this.toastService.showError(
            this.translate.instant('common.error'),
            this.translate.instant('errors.auth')
          );
          translationSubscriber$.unsubscribe();
          this.router.navigate(['auth/login']);
          return false;
        });
    }
    return true;
  }
}
