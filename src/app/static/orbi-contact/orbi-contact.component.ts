import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
@Component({
  selector: 'anms-orbi-contact',
  templateUrl: './orbi-contact.component.html',
  styleUrls: ['./orbi-contact.component.css']
})
export class OrbiContactComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor() { }

  ngOnInit() {
  }

}
