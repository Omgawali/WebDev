import { Component,Input,OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  @Input() public parentData:any;
 
  @Output() public MyEvent = new EventEmitter();
 
 
  public SendEvent()
  {
    
    this.MyEvent.emit('Hello from child');
  }
  constructor() { }

  ngOnInit() {
  }


}
