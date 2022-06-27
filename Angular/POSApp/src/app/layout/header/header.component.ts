import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    { Name: 'User', url: '/users', isActive: true },
    { Name: 'Books', url: '/books', isActive: false },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  OnMenuClick(menu: any) {
    this.menus.map(x => x.isActive = false);
    menu.isActive = true;
    this.router.navigate([menu.url]);
  }

}
