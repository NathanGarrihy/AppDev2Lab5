import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }

  getHalf(myNum:number):number{   //  adding a service
    return myNum/2;               //  takes a number, returns the number, divides the number by 2
  }
}
