import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-orbi-partner-details',
  templateUrl: './orbi-partners-details.component.html',
  styleUrls: ['./orbi-partners-details.component.css']
})
export class OrbiPartnerDetailsComponent implements OnInit {
public selectedPartner: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(( params: Params ) => {
      this.selectedPartner = params['partnerId'];
    }); 
  }

}
