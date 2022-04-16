import { Component, OnInit, ViewChild } from '@angular/core';
import { Categories } from 'src/app/class/categories';
import { DataHandlerServiceService } from 'src/app/services/data-handler-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any;

  constructor(private dataHandler: DataHandlerServiceService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(Categories => this.categories = Categories);
  }
  

}
