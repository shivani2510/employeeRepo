import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './url.constants';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get(endUrl?: string): Observable<any> {
    return this.http.get(this.getFullUrl(endUrl), this.getRequestHeaderHTTPClient());
  }

  post(endPoint: string, data: any, backendUrl?: string): Observable<any> {
    return this.http.post(this.getFullUrl(endPoint), data, this.getRequestHeaderHTTPClient());
  }


  getFullUrl(url){
    return BASE_URL+url;
  }

  private getRequestHeaderHTTPClient(data?: any, params?: any) {
    const request: any = {
      headers: new HttpHeaders(),
      body: data,
      params: new HttpParams({fromObject: params})
    };
    return request;
  }
  
}
