import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

  public numbo:number=0;
  public numbo1:number=0;
 a=12
 b=123
  constructor(public aobhj:ArithmeticService)
  {
     aobhj.iNo=this.a
     aobhj.iNo2=this.b     
  }

  ngOnInit()
  {
    this.numbo=this.aobhj.addition()
    this.numbo1=this.aobhj.substract()
  }
}
