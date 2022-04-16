import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TestData } from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerServiceService {

  slidesSubject = new BehaviorSubject<TestData[]>(TestData.homeSlides)
  categoriesSubject = new BehaviorSubject<TestData[]>(TestData.categories)
  productsSubject = new BehaviorSubject<TestData[]>(TestData.products)

  constructor() { }
}
