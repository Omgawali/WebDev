import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component
 {
   public numbo:boolean=true;
   a=5
  constructor(public nobhj:NumberService)
  {
    nobhj.iCnt=this.a;
  }
  ngOnInit()
  {
     this.numbo = this.nobhj.ChkPrime();
  }
}
