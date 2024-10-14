import { Component } from '@angular/core';
import { AuthService } from './../../Shared/Services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModuleimport { Router } from '@angular/router';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { Console } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _AuthService:AuthService,private _Router :Router ,private _FormBuilder :FormBuilder){}


  msgError:string=''
  isLoading:boolean=false;
  
    //first creat form control(make an property from type form group and it will contain form control)

  loginForm:FormGroup= this._FormBuilder.group({ // we will link it to form in html 
   
    email:[null,[Validators.required,Validators.email]], //it take initial value , and link form control to inputs in html
    password:[null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]], 
   
  });
  
  
  
  
  
  
  handleForm():void{
  
    if(this.loginForm.valid){
      this.isLoading=true;
    this._AuthService.setLogin(this.loginForm.value).subscribe({
      next:(response)=>{
        if(response.message=='success'){
          this.isLoading=false;
        
// console.log(response)

          localStorage.setItem('Token',response.token)

         this._Router.navigate(['/home'])
   
        }
       },
   
       error:(err:HttpErrorResponse)=>
       {
        this.isLoading=false;
        this.msgError=err.error.message  // y3ni tl3 f console el msg bt3t el error ll user bs geb mn err el property rl rsmha error e geb el msg menha
       }
  
    })
  
    }
  }
  
}
