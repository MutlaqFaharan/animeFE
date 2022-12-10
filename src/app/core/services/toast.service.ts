import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private toastrService: ToastrService,
    private readonly translate: TranslateService
  ) {}

  toastrOptions = {
    timeOut: 5000,
    closeButton: true,
    progressBar: true,
  };

  showInfo(title: string, description: string) {
    this.toastrService.info(description, title, this.toastrOptions);
  }

  showSuccess(title: string, description: string) {
    this.toastrService.success(description, title, this.toastrOptions);
  }

  showWarning(title: string, description: string) {
    this.toastrService.warning(description, title, this.toastrOptions);
  }

  showError(title: string, description: string) {
    this.toastrService.error(description, title, this.toastrOptions);
  }

  _onApiError = (error: any) => {
    let translationSubscriber$ = this.translate
      .get('common.error', 'errors.auth')
      .subscribe((translated: string) => {
        this.showError(
          this.translate.instant('common.error'),
          error?.error?.errors?.length > 0
            ? error?.error?.errors?.join(',') || ''
            : error.error.error
        );
      });
    translationSubscriber$.unsubscribe();
  };

  _onApiSuccess = (description: string) => {
    let translationSubscriber$ = this.translate
      .get('common.error', 'errors.auth')
      .subscribe((translated: string) => {
        this.showSuccess(this.translate.instant('common.success'), description);
      });
    translationSubscriber$.unsubscribe();
  };

  _noLoggedInUser() {
    let translationSubscriber$ = this.translate
      .get('errors.auth')
      .subscribe((translated: string) => {
        this.showSuccess(
          this.translate.instant('common.error'),
          this.translate.instant('errors.auth')
        );
      });
    translationSubscriber$.unsubscribe();
  }
}
