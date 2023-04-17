import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText:String;
  buttonTextU:String="click to convert in upper case";
  buttonTextL:String="CLICK TO CONVERT IN LOWER CASE";

  constructor()
  {
    this.buttonText="Marvellous Infosystems";
  }

 fun()
 {
   return "Marvellous Infosystems";
 }

 fun1()
 {

   this.buttonText="Educating for Better tomorrow";
 }

 fun2()
 {
   this.buttonTextU=this.buttonTextU.toUpperCase();
 }

 fun3()
 {

  this.buttonTextL=this.buttonTextL.toLowerCase();
 }

}
