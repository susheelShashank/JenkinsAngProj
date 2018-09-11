import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about-orbi',
  templateUrl: './about-orbi.component.html',
  styleUrls: ['./about-orbi.component.css']
})
export class AboutOrbiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
public navigateTo(itemName): void {
  this.router.navigate(['/about?item=' + itemName]);
}
}
