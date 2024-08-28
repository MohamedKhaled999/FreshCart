import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly _ActivatedRoute=inject(ActivatedRoute)

  myHeader:any ={
    token:localStorage.getItem('userToken')
  }

  constructor(private readonly _HttpClient:HttpClient) { }

  checkOut(data:any,id:string):Observable<any>{

    console.log(window.location.host);
    
    
   return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://${window.location.host}`,
      {
        "shippingAddress":data
    }
      ,{
    headers:this.myHeader
    })
  }
}
