import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(data:any) : Observable<any>
  {
    return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
  }
  signIn(data:any): Observable<any>
  {
    return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data);
  }
}
