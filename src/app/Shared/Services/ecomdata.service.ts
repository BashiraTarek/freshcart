import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }




  getAllProducts():Observable<any>{


     return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }


  getProductDetails(id:string):Observable<any>{

    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`); //la'n el id bykon daynamic 

  }
  getCategories():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

}


