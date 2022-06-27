import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: any;
  @Output() afterEdit = new EventEmitter<any>();

  constructor(private bookservice: BookService) {
  }
  ngOnInit(): void {
    // this.books = this.bookservice.ListOfBooks;
    this.bookservice.getBooks()
      .subscribe((data) => {
        this.books = data;
      });
  }
  Edit(obj: any): void {
    this.afterEdit.emit(obj);
  }
  Delete(obj: any): void {
    obj.isDelete = true;
    this.afterEdit.emit(obj);
  }

}
