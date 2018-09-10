import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
@Component({
  selector: 'anms-orbi-portfolio',
  templateUrl: './orbi-portfolio.component.html',
  styleUrls: ['./orbi-portfolio.component.css']
})
export class OrbiPortfolioComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public portfolios: any[] = [{
    'img': 'vegetables-variety.jpg',
    'title': 'Vegetables',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  },{
    'img': 'fruits.jpg',
    'title': 'Fruits',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  },{
    'img': 'flowers.jpg',
    'title': 'Flowers',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
  }];
    constructor() { }
  
    ngOnInit() {
    }
    public getImgPath(img: string): string {
      if(img.indexOf('http') !== -1)
        return img;
      return '../../assets/imgs/orbi/Portfolio/'+img;
    }
  }


