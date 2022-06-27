import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  Users = [
    {
      ID: 1, Name: 'Tanuja', DOB: new Date('17/Nov/2000')
    },
    {
      ID: 2, Name: 'Prasad', DOB: new Date('21/Nov/2003')
    },
    {
      ID: 3, Name: 'Roshan', DOB: new Date('9/9/1990')
    },
    {
      ID: 3, Name: 'Roshani', DOB: new Date('8/15/1991')
    },
    {
      ID: 3, Name: 'Nitesh', DOB: new Date('10/1/1987')
    },
    {
      ID: 3, Name: 'Sulekha', DOB: new Date('8/Nov/1990')
    }
  ]
  constructor() { }

  ngOnInit(): void {
    //this.Users.map((x, index) => { x.ID = index, x.Name = x.Name + ' sawant' });
    //this.Users = this.Users.filter(x => x.Name.includes('N'));
  }

}
