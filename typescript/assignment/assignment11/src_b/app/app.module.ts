import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyaddPipe } from './myadd.pipe';
import { MymultPipe } from './mymult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyaddPipe,
    MymultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
