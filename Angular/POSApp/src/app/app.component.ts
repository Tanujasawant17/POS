import { Component, OnInit } from '@angular/core';
import { BookService } from './Core/Services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POSApp';
  username = 'Rani';
 
  constructor(private bookservice: BookService) {

  }
  ngOnInit(): void {
   
  }
}
