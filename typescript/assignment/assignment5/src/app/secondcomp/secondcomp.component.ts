import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent {

  @Input() public MessagefromParent="";
}
