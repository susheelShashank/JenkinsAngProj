import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'anms-orbi-carousel',
  templateUrl: './orbi-carousel.component.html',
  styleUrls: ['./orbi-carousel.component.css']
})
export class OrbiCarouselComponent implements OnInit {


  imgags = [
    'assets/imgs/orbi/carousel/1.jpg',
    'assets/imgs/orbi/carousel/2.jpg',
    'assets/imgs/orbi/carousel/3.jpg',
    'assets/imgs/orbi/carousel/4.jpg',
    'assets/imgs/orbi/carousel/5.jpg',
    'assets/imgs/orbi/carousel/6.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    interval: {
      timing: 2000,
      initialDelay: 500
    },
    point: {
      visible: false
    },
    loop: true,
    slide: 1,
    speed: 400,
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}
 
  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }
 
  public carouselTileLoad(j) {
    // console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}
