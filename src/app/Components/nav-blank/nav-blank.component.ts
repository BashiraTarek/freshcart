import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Shared/Services/auth.service';
import { CartService } from '../../Shared/Services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterModule],//CHECK
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.css'
})
export class NavBlankComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _CartService:CartService){}
  

cartCount:number=0



ngOnInit(): void {
  
  this._CartService.cartNumber.subscribe({

    next:(data)=>{

      this.cartCount=data;
      

    }
    
  })

  this._CartService.getUserCart().subscribe({

    next:(response)=>{

      this._CartService.cartNumber.next(response.numOfCartItems);


    }
  })
}


  logOutUser():void{

this._AuthService.logOut();

  }
}
