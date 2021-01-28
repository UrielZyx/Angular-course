import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  
  getData(): string {
    return "Hello! :)"
  }
}
