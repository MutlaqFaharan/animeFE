import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  handleError = (error: any) => {
    throw new Error(error?.error?.message);
  };

  public get = (url: string, params?: any): Observable<any> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }

    return this.http.get(`${Constants.API_ENDPOINT}${url}`, {
      params: httpParams,
    });
  };

  public post = (url: string, body: any): Observable<any> => {
    return this.http.post(`${Constants.API_ENDPOINT}${url}`, body);
  };

  public patch = (url: string, body: any): Observable<any> => {
    return this.http.patch(`${Constants.API_ENDPOINT}${url}`, body);
  };

  public put = (url: string, body: any): Observable<any> => {
    return this.http.put(`${Constants.API_ENDPOINT}${url}`, body);
  };

  public delete = (url: string, params?: any): Observable<any> => {
    let httpParams = new HttpParams();
    for (const property in params) {
      httpParams = httpParams.set(property, params[property]);
    }
    return this.http.delete(`${Constants.API_ENDPOINT}${url}`, {
      params: httpParams,
    });
  };
}
