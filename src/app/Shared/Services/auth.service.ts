import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }


  logOut():void{
    localStorage.removeItem('Token');
   this._Router.navigate(['/login']);

  }

setRegister(userData:object):Observable<any>{

 return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",userData)
}


setLogin(userData:object):Observable<any>{

  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",userData)
 }

}
