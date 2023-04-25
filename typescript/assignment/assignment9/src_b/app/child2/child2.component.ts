import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
{
   constructor(public sobhj:StringService)
   {
    
   }


   public str:string="aaaaaa";

   ngOnInit()
   {
      this.str=this.sobhj.CountCapital();
   }
}
