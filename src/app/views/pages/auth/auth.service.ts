import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { APIService } from 'src/app/core/services/api.service';
import { Token } from 'src/app/core/shared/interfaces/http-response/login-response.interface';
import { LoginData } from 'src/app/core/shared/interfaces/data/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly api: APIService) {}

  login(loginData: LoginData): Observable<Token> {
    return this.api.post(Constants.AUTH_PATH + 'login', loginData);
  }
}
