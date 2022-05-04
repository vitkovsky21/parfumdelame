import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/class/products';
import { TestData } from 'src/app/data/TestData';
import { DataHandlerServiceService } from 'src/app/services/data-handler-service.service';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products: any;
  public startProducts = TestData.products;
  public sortedProducts: string[] = [];
  public sliceProducts!: any;

  categories: any;
  pageIndex!: number;
  previousPageIndex!: number;

  public startIndex = 0;
  public endIndex = 9;

  constructor(private route: ActivatedRoute, private dataHandler: DataHandlerServiceService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(Categories => this.categories = Categories);
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.products = TestData.products.filter(product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else
        this.products = TestData.products.slice(this.startIndex, this.endIndex);
    })
  }

  sortByCategories(number: number) {
    this.products = TestData.products;
    this.products.map((item: any) => {
      if (item.category == TestData.categories[number]) {
        this.sortedProducts.push(item);
        this.products = this.sortedProducts;
      }
    })
    this.sortedProducts = [];
  }

  onPageChange(event: PageEvent) {
    if (event.pageIndex > this.previousPageIndex || undefined) {
      this.startIndex += 10;
      this.endIndex += 10;
      this.products = TestData.products.slice(this.startIndex, this.endIndex)
    }
    else if (event.pageIndex < this.previousPageIndex) {
      this.startIndex -= 10;
      this.endIndex -= 10;
      this.products = TestData.products.slice(this.startIndex, this.endIndex)
    }
    else {
      this.startIndex += 10;
      this.endIndex += 10;
      this.products = TestData.products.slice(this.startIndex, this.endIndex)
    }
    
    this.previousPageIndex = event.pageIndex;
  }

}