import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  myHeader:any ={
    token:localStorage.getItem('userToken')
  }

  constructor(private readonly _HttpClient:HttpClient) { }

  addProductToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        "productId": id
    },
    {
      headers:this.myHeader
    }
    )
  }

  getCartProducts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,
      
    {
      headers:this.myHeader
    }
    )
  }
  deleteSpecificCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,
    {
      headers:this.myHeader
    }
    
    )
  }
  updateCartProductQuantity(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,{
      "count": count
  },
    {
      headers:this.myHeader
    }
    
    )
  }
}
