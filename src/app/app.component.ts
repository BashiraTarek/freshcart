import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";
import { NavBlankComponent } from "./Components/nav-blank/nav-blank.component";
import { NavAuthComponent } from "./Components/nav-auth/nav-auth.component";
import { BlankLayoutComponent } from "./Components/blank-layout/blank-layout.component";
import { AuthLayoutComponent } from "./Components/auth-layout/auth-layout.component";
import { ToastrService } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { myhttpInterceptor } from './Shared/Interceptors/myhttp.interceptor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavBlankComponent, NavAuthComponent, BlankLayoutComponent, AuthLayoutComponent,  ],
  templateUrl: './app.component.html',
 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyNewProject';

  // constructor(private _ToastrService:ToastrService){
  //  _ToastrService.success('product added successfully to cart')

  // }
}
