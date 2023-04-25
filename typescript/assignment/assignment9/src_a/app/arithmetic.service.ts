import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  public iNo:number=0;
  public iNo2:number=0;
  public addition()
  {
     return this.iNo+this.iNo2;
  }

  public substract()
  {
    return this.iNo-this.iNo2
  }

  constructor() 
  { 
    
  }


}
