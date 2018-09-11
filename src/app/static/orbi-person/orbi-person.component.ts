import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-orbi-person',
  templateUrl: './orbi-person.component.html',
  styleUrls: ['./orbi-person.component.css']
})
export class OrbiPersonComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  public selectedPerson: string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(( params: Params ) => {
      this.selectedPerson = params['pId'];
    }); 
  }

}
