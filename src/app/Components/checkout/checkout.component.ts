import { response } from 'express';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Shared/Services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

constructor(private _FormBuilder :FormBuilder , private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}

cartId:any=''


//awl ma aftah page yshab el id mn url:
ngOnInit(): void {
  
  this._ActivatedRoute.paramMap.subscribe({

    next:(params)=>{
    console.log  (params.get('id'))
    this.cartId=params.get('id')// kda ma3aya el cardId
    },
    
  })

}

//create checkout form
checkout:FormGroup=this._FormBuilder.group({

details:[''],

phone:[''],

city:['']

})

//after submit form:

handleForm():void{
  
  console.log(this.checkout.value)//body=> (user data kda ma3aya)

  this._CartService.checkOut(this.cartId,this.checkout.value).subscribe({

    next:(response)=>{
      console.log(response)

     if(response.status=="success"){
       
      window.open(response.session.url,'_self')//ya3ni eftahly el url el f seassion w self di ya3ni in the same tapa msh yftah wahda gdeda

     }

    }
  })

}


}
