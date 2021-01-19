import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest = req
    let token = this.auth.getToken()

    debugger

    if(token != undefined && token != null && token != "") {
      newRequest = req.clone({headers: req.headers.set("x-access-token", token)})
    }

    return next.handle(newRequest)
  }
}
