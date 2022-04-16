import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataHandlerServiceService } from 'src/app/services/data-handler-service.service';
import Swiper, { Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None // <======================== HERE
})
export class MainComponent implements OnInit {

  slides: any;
  public swiperConfig: SwiperOptions = {
    pagination: true,
  }
  @ViewChild('swiper') swiper?: SwiperComponent;

  constructor(private dataHandler: DataHandlerServiceService) { }

  ngOnInit(): void {
    Swiper.use([Pagination]);
    this.dataHandler.slidesSubject.subscribe(slides => this.slides = slides);
  }

  
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

}
