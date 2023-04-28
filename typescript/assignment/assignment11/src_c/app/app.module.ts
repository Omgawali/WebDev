import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvlouschkPipe } from './marvlouschk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvlouschkPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
