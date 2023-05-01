import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompsuccessDirective } from './compsuccess.directive';
import { CompfailureDirective } from './compfailure.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompsuccessDirective,
    CompfailureDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
