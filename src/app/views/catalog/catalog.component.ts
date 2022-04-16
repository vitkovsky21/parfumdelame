import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/class/products';
import { TestData } from 'src/app/data/TestData';
import { DataHandlerServiceService } from 'src/app/services/data-handler-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products: any;
  categories: any;
  public sortedProducts: string[] = [];

  constructor(private route: ActivatedRoute, private dataHandler: DataHandlerServiceService) { }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(Categories => this.categories = Categories);
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.products = TestData.products.filter(product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else
        this.products = TestData.products;
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

}