import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  
  toggleLoader: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onLoad()
    }, 1500)
  }

  onLoad() {
    this.toggleLoader = true;
  }

}
