import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  ListOfBooks = [
    { id: 1, title: 'A', description: '1 2 3' },
    { id: 2, title: 'B', description: '1 2 3' },
    { id: 3, title: 'C', description: '1 2 3' },
  ]
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('https://localhost:5001/api/Book');
  }
  addBooks(book: any) {
    return this.http.post('https://localhost:5001/api/Book', book);
  }
  updateBooks(id: number, book: any) {
    return this.http.put('https://localhost:5001/api/Book/' + id, book);
  }
  deleteBooks(id: number) {
    return this.http.delete('https://localhost:5001/api/Book/' + id);
  }
}
