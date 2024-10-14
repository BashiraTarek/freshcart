import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';  // Correct import for Angular Router
import { Router } from '@angular/router';        // Import Router from Angular

export const authGuard: CanActivateFn = (route, state) => {

  let _Router = inject(Router);  // Inject the Angular Router

  if (localStorage.getItem('Token') != null) {
    return true;  // Allow route activation if token is present
  } else {
    _Router.navigate(['/login']);  // Navigate to login page if not authenticated
    return false;  // Block route activation
  }

};
