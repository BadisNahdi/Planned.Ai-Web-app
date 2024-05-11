import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: any = 'http://192.168.1.14:3000'
  constructor(
    private http: HttpClient
  ) { }
  createatrip(options: any): Observable<any> {
    return this.http.post(this.url+'/plan', options)
  }
}
