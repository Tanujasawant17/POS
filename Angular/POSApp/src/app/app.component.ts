import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POSApp';
  username = 'Rani';
  User = [
    {
      Id: 1, Name: 'Tanuja', DOB: '17/11/2000'
    },
    {
      Id: 2, Name: 'Prasad', DOB: '21/11/2003'
    },
    {
      Id: 3, Name: 'Roshan', DOB: '9/9/1990'
    }
  ]
}
