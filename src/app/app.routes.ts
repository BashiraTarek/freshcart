import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { authGuard } from './Shared/Gurds/auth.guard';
import { DetailsComponent } from './Components/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

export const routes: Routes = [

    {
      path: '', canActivate:[authGuard],component:BlankLayoutComponent,
      children: [
        {path:'' ,redirectTo:'home',pathMatch:'full'},
        { path: 'home', component:HomeComponent },
        { path: 'cart', component:CartComponent },
        { path: 'products', component:ProductsComponent },
        {path:'allorders',component:AllordersComponent},
        { path: 'checkout/:id', component:CheckoutComponent },
        { path: 'wishlist', component:WishlistComponent },
        { path: 'categories', component:CategoriesComponent },
        { path: 'details/:id', component:DetailsComponent},
        { path: 'brands', component:BrandsComponent },
      ]},
        
    
   
    {
      path: '', component:AuthLayoutComponent,
      children: [
        { path: 'login', component:LoginComponent },
        { path: 'register', component:RegisterComponent }
      ]
    },
  {path:"**",component:NotfoundComponent},
  ];
  