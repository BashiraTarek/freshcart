import { HttpInterceptorFn } from '@angular/common/http';

export const myhttpInterceptor: HttpInterceptorFn = (req, next) => {

if(localStorage.getItem('Token') !=null){

  let Myheader:any={token : localStorage.getItem('Token')   }

  req= req.clone({
  
    setHeaders:Myheader
  })

}



  return next(req);
};
