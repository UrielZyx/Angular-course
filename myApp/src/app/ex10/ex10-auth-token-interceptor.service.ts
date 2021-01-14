import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ex10AuthService } from './ex10-auth.service';

@Injectable({
  providedIn: 'root'
})
export class Ex10AuthTokenInterceptorService implements HttpInterceptor {

  constructor(private authUtils: Ex10AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest = req
    let token = this.authUtils.getToken()

    if(token != null) {
      newRequest = req.clone({headers: req.headers.set("x-access-token", token)})
    }
    
    return next.handle(newRequest)
  }
}
