import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any=null;
  constructor(private http:HttpClient ) { }

 private readonly _Route =  inject(Router)

  signUp(data:any) : Observable<any>
  {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
  }
  signIn(data:any): Observable<any>
  {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signin`,data);
  }

  saveUserData():void{
    if(localStorage.getItem('userToken')){
      this.userData  = jwtDecode(localStorage.getItem('userToken')!)  ;
      console.log(this.userData)
    }
  }

  logOut():void{
    localStorage.removeItem('userToken');
    this.userData=null;
    this._Route.navigate(['/login'])
  }
}
