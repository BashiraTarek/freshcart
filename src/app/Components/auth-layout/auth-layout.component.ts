import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavAuthComponent } from "../nav-auth/nav-auth.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, NavAuthComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
