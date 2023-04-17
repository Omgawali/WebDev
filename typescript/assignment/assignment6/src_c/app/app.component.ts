import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to ts</h1>`,
  styles: [`
  h1{
    color:red;
  }`]
})
export class AppComponent {
  title = 'Marvellous';
}
