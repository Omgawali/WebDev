import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';

   public str="Marvellous Infosystem";
  public MarvellousEvent()
  {
    this.str="Educating  for better tomorrow";
  }

  
}
