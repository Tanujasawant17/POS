import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { bookroutes } from './books.routing';
import { LayoutModule } from '../layout/layout.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BooksComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    RouterModule.forChild(bookroutes)
  ]
})
export class BooksModule { }
