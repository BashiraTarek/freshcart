import { response } from 'express';
import { TermTextPipe } from './../../Shared/Pipes/term-text.pipe';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EcomdataService } from '../../Shared/Services/ecomdata.service';
import { Product } from '../../Shared/Interfaces/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../Shared/Pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { Productt } from '../../Shared/Interfaces/productt';
import { CartService } from '../../Shared/Services/cart.service';
import { ToastrModule} from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, CarouselModule,TermTextPipe,SearchPipe,FormsModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  constructor(private _EcomdataService:EcomdataService,private _Router: Router,private _CartService:CartService ){}

  // ,private _ToastrService:ToastrService

  products:Productt[]=[];
  categories:any[]=[]

  searchTerm:string="";
// for categories slider
  categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


// for main slider

mainOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  autoplay:true,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: false
}




ngOnInit(): void {
  
   this._EcomdataService.getAllProducts().subscribe({
  
    next:(response)=>{
      // console.log(response)
   this.products=response.data;
    },

   });



   this._EcomdataService.getCategories().subscribe({
    next:(response)=>
    this.categories=response.data,
    
   })
}



goDetails():void{
this._Router.navigate(['/details'])
}


addCart(id:string):void{

  this._CartService.addToCart(id).subscribe({

    next:(response)=>{
      // this._ToastrService.success(response.message , 'FreshCart')
    this._CartService.cartNumber.next(response.numOfCartItems)

    
    }, 
 
  error:(err)=>{

    console.log(err)

  }

})

}

}

