import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Shared/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
constructor(private _WishlistService:WishlistService){}

ngOnInit(): void {
  
  this._WishlistService.GetUserWishlist().subscribe({

    next:(response)=>{
      console.log(response)
    }
  })
}

}
