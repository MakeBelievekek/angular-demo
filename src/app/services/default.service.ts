import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor() { }

  doSmthing(): void {
    console.log('default service doSmthing method used');
  }
}
