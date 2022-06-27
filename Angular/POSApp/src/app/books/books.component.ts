import { Component, OnInit } from '@angular/core';
import { BookService } from '../Core/Services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookdetailsobj: any;
  books: any;
  isList: boolean = true;

  constructor(private bookservice: BookService) {
  }
  ngOnInit(): void {
  }
  AddOrEdit(obj: any): void {
    if (obj) {
      if (obj.isDelete) {
        this.bookservice.deleteBooks(obj.id).subscribe({
          next: data => {
            alert('Deleted Successfully');
          },
          error: error => {
            alert(error.message);
            console.error('There was an error!', error);
          }
        });
      }
      else {
        this.bookdetailsobj = obj;
        this.isList = !this.isList;
      }
    }
    else {
      this.bookdetailsobj = {
        title: '',
        description: ''
      };
      this.isList = !this.isList;

    }
  }
  OnSaveClick(bookdetails: any): void {
    debugger;
    if (bookdetails.id) {
      // bookdetails.Title = bookdetails.title;
      // bookdetails.Description = bookdetails.description;
      this.bookservice.updateBooks(bookdetails.id, bookdetails).subscribe({
        next: data => {
          // debugger;
          // alert(data);
          alert('Updated Successfully');
          this.isList = !this.isList;
        },
        error: error => {
          alert(error.message);
          console.error('There was an error!', error);
        }
      });;
      // this.bookservice.ListOfBooks.filter(x => x.id == bookdetails.id)
      //   .map(y => { y.title = bookdetails.title, y.description = bookdetails.description });
    }
    else {
      this.bookservice.addBooks({
        Id: 0,
        title: bookdetails.title,
        description: bookdetails.description
      }).subscribe({
        next: data => {
          alert('Added Successfully');
          this.isList = !this.isList;
        },
        error: error => {
          alert(error.message);
          console.error('There was an error!', error);
        }
      });
      // this.bookservice.ListOfBooks.push({
      //   id: this.bookservice.ListOfBooks.length + 1,
      //   title: bookdetails.title,
      //   description: bookdetails.description
      // });
    }
  }
}
