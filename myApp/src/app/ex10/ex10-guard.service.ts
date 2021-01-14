import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Ex10AuthService } from './ex10-auth.service';

@Injectable({
  providedIn: 'root'
})
export class Ex10GuardService implements CanActivate{

  constructor(private authUtils: Ex10AuthService) { }
  
  canActivate(): boolean {
    return this.authUtils.getRole() == "admin"
  }
}