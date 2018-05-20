import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

  public slider = new Slider();

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.showTitle = false;
    this.slider.config.showNavigator = true;
    this.slider.config.showDots = true;

  }

  ngOnInit() {

    const slideItems = [
      { src: 'assets/img/slide-01.jpg', title: 'Title 1' },
      { src: 'assets/img/slide-02.jpg', title: 'Title 2' },
      { src: 'assets/img/slide-03.jpg', title: 'Title 3' },
    ];

    this.slider.items = slideItems;
  }

}
