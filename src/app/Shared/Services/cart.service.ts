import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private  _HttpClient:HttpClient) { }


cartNumber:BehaviorSubject <number>=new BehaviorSubject(0)

Myheader:any={token : localStorage.getItem('Token')   }



addToCart(prodId:string):Observable<any>{

return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:prodId},{headers:this.Myheader})

}


getUserCart():Observable<any>{

  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.Myheader})
}

removeItem(prodcutId:string):Observable<any>{

  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodcutId}`,{headers:this.Myheader})
}

UpdateCartProduct(prodcutId:string,countprod:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodcutId}`,{count:countprod},{headers:this.Myheader})
}



checkOut(cartId:string ,userData:object):Observable<any>{

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,

    {
      shippingAddress:userData
  }
  ,
    {headers:this.Myheader}

  )
}

}
