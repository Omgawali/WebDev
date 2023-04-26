import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WchoiceComponent } from './wchoice/wchoice.component';

const routes: Routes = [
  {path:'technology',component:TechnologyComponent},
  {path:'books',component:BooksComponent},
  {path:'wchoice',component:WchoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
