import { AuthService } from './../../Shared/Services/auth.service';
import { CommonModule } from '@angular/common';
import {  HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModuleimport { Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router :Router){}


msgError:string=''
isLoading:boolean=false;



  //first creat form control(make an property from type form group and it will contain form control)
  
registerForm:FormGroup=new FormGroup({ // we will link it to form in html 
  name:new FormControl('' ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),//it take initial value , and link form control to inputs in html
  email:new FormControl('',[Validators.required,Validators.email]), 
  password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]), 
  rePassword:new FormControl(''), 
  phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]), 
},{validators:[this.confirmPassword]} as FormControlOptions );



//make an custom validation for rePassword 
confirmPassword(group:FormGroup):void{

  let password=group.get('password')
  let rePassword=group.get('rePassword')


  if(rePassword?.value !=password?.value){

    rePassword?.setErrors({mismatch:true})
  }

 else if(rePassword?.value ==''){
   rePassword.setErrors({required:true})
  }
}




handleForm():void{

  if(this.registerForm.valid){
    this.isLoading=true;
  this._AuthService.setRegister(this.registerForm.value).subscribe({
    next:(response)=>{
      if(response.message=='success'){
        this.isLoading=false;
       this._Router.navigate(['/login'])
 
      }
     },
 
     error:(err:HttpErrorResponse)=>
     {
      this.isLoading=false;
      this.msgError=err.error.message  // y3ni tl3 f console el msg bt3t el error bs geb mn err el property el esmha error w geb el msg menha w e3rdha ll user 
     }

  })

  }
}


}