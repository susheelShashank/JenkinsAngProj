import { Component, OnInit } from '@angular/core';
import {BhalsarService } from '../orbi-bhalsar/bhalsar.service';
import { ActivatedRoute, Params } from '@angular/router';import { NgForm } from '@angular/forms';
@Component({
  selector: 'anms-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private selectedProductId: string;
  
  constructor(private bhalsarService :BhalsarService, private route: ActivatedRoute) { }
   
                   
  ngOnInit() {
    this.route.params.subscribe((params : Params)=> {
      this.selectedProductId = params['pId'];
      alert(" selected productid is = "+this.selectedProductId);
      if(this.selectedProductId) {
        alert(JSON.stringify(this.bhalsarService.getProductById(this.selectedProductId)))

      }
           
            
          
       
  });
}

}
