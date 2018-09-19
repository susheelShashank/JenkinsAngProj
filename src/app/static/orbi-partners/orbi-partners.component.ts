import { Component, OnInit } from '@angular/core';
import{ROUTE_ANIMATIONS_ELEMENTS} from '@app/core';

import { environment as env } from '@env/environment';

@Component({
  selector: 'anms-orbi-partners',
  templateUrl: './orbi-partners.component.html',
  styleUrls: ['./orbi-partners.component.css']
})
export class OrbiPartnersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  public partnersList: any = [{
    'title': 'BHALSAR INTERNATIONAL',
    'summary': 'Bhalsar seeds is a Bangalore based R&D company established with the aim of providing farmers technology backed heigh yeilding and premium quality hybrid seeds.',
    'logoImg': 'bhalsar.png'
  },{
    'title': 'CAMSON SEEDS',
    'summary': 'Camson seeds is a Bangalore based R&D company established with the aim of providing farmers technology backed heigh yeilding and premium quality hybrid seeds.',
    'logoImg': 'http://www.camsonseeds.com/bootstrap/img/logo.png'
  },{
    'title': 'Arunodaya Seeds',
    'summary': 'Arunodaya seeds is a Bangalore based R&D company established with the aim of providing farmers technology backed heigh yeilding and premium quality hybrid seeds.',
    'logoImg': 'arunodaya.png'
  }];
    constructor() { }
  
    ngOnInit() {
    }
    public getImgPath(img: string): string {
      if(img.indexOf('http') !== -1)
        return img;
      return './assets/imgs/orbi/partners/'+img;
    }
  
  }
  
  