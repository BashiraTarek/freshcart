import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  Myheader:any={token : localStorage.getItem('Token')   }


addToWishlist(prodId:string):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:prodId},{headers:this.Myheader})
}

GetUserWishlist():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:this.Myheader})
}

removeWishlistItem(prodId:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com//api/v1/${prodId}`,{headers:this.Myheader})
}

}
