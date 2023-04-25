import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  constructor()
  {}
  public bflag:boolean=true
  public ChkPrime()
  {
    public iCnt:number=0;
    
    for(var iNo=2;iNo<=iCnt;iNo++)
    {
      
      if(iCnt%iNo==0)
      {
        bflag=false;
        break;
      }
      bflag=true
    }
    
  }
  return this.bflag;

}
