import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Shared/Services/cart.service';
import { CommonModule } from '@angular/common';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

constructor(private _CartService:CartService){}

cartDetails:any={}

removeCartItem(id:string):void{

  this._CartService.removeItem(id).subscribe({

    next:(response)=>{
      this.cartDetails=response.data;//3ashan el cartdetails t3ml override f kda b3d ma mas7t hat3rd f html el data el mat3mlhash remove
  this._CartService.cartNumber.next(response.numOfCartItems)
    },

    error:(err)=>
      console.log(err)
  })
}

ngOnInit(): void {
  

this._CartService.getUserCart().subscribe({

  next:(response)=>{
    console.log(response.data)
   this.cartDetails=response.data;

  },

  error:(err)=>{

    console.log(err);
  }
})





}

changeCount(id:string,count:number){

if(count > 0){

  this._CartService.UpdateCartProduct(id,count).subscribe({

    next:(response)=>{
      // console.log(response.data)

      this.cartDetails=response.data
    },

    error:(err)=>{
      console.log(err)
    }
  })

}

}

}
