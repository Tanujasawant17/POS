import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() bookdetails: any;
  // bookdetails = {
  //   title: '',
  //   description: ''
  // };
  @Output() afterSave = new EventEmitter<any>();
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
  }
  Save(): void {
    debugger;
    this.afterSave.emit(this.bookdetails);
  }
}
