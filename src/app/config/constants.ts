import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class Constants {
  public static readonly API_ENDPOINT: string = environment.API;

  public static readonly AUTH_PATH: string = 'auth/';
  public static readonly POST_PATH: string = 'posts/';
  public static readonly USER_PATH: string = 'user/';
  public static readonly ADMIN_PATH: string = 'admin/';
  public static readonly QA_PATH: string = 'qa/';
}
