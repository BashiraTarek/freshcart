
import { response } from 'express';
import { resolve } from 'node:path';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Shared/Interfaces/products';
import { EcomdataService } from '../../Shared/Services/ecomdata.service';
import { CommonModule } from '@angular/common';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ CarouselModule ,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
 constructor(private _ActivatedRoute:ActivatedRoute ,private _EcomdataServic:EcomdataService){}




productOptions: OwlOptions = {
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



 productDetails:Product={} as Product;//kda ana ba'olo en ha fady hygeli lesa mn url bs el gaylak mn no3 product interface 

ngOnInit(): void {



  
this._ActivatedRoute.paramMap.subscribe({
  
  next:(params)=>{

    let productId:any= params.get('id'); // ana kda akhdt id mafrod ab3to b'a ll api 3ashan yb3tly el details 
  


   //call api 

   this._EcomdataServic.getProductDetails(productId).subscribe({  //kda ana ba3t el id ll backend 

    next:(response)=>{
      

      this.productDetails =response.data ; // kda rad 3alya b el details bt3t product hahotha f var da 
    }
   })
   


     
  }
})
}
  

}
