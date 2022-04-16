import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  menu: boolean = false;
  navbar: boolean = false;
  search: boolean = false;
  searchTerm: string = '';

  ngOnInit(): void {
  }

  menuToggle() {
    this.menu = !this.menu;
    this.navbar = !this.navbar
  }

  disable() {
    this.menu = false;
    this.navbar = false;
    this.search = false;
  }

  searchToggle() {
    this.search = !this.search;
  }

  searchProduct() {
    if (this.searchTerm) {
      this.router.navigateByUrl('/catalog/' + this.searchTerm)
    }
  }
}
