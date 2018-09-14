import { Component, OnInit } from "@angular/core";
//import { MatExpansionPanelTitle } from "@angular/material";
import { environment as env } from "@env/environment";
import { ROUTE_ANIMATIONS_ELEMENTS } from "@app/core";
//import { Observable } from '@rxjs/Observable';
import { ProductListService } from "@app/static/services/productList.service";
import { Router } from '@angular/router';
import { ProductListData } from "@app/static/services/model/productList";

//import Arunodaya=require("./Arunodaya.json");



// import { concat } from "rxjs";

@Component({
  selector: "anms-tene-dropdown",
  templateUrl: "./tene-dropdown.component.html",
  styleUrls: ["./tene-dropdown.component.scss"]
})
export class  TeneDropdownComponent implements OnInit {
  private balsarJSON_URL: string = "/assets/data/Balsar.json";
  private camsonJSON_URL: string = "/assets/data/Camson.json";
  private arunodayaJSON_URL: string = "/assets/data/Arunodaya.json";
  private balsarDataJSON: ProductListData[] = [];
  private camsonDataJSON: any = [];
  private arunodayaDataJSON: any = [];
  public productList: ProductListData[] = [];
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  constructor(private productListService: ProductListService ) {
    
  }
  
  ngOnInit() {
    this.productListService.getProductList(this.balsarJSON_URL)
      .subscribe((data)=>{
          this.balsarDataJSON=data; 
          this.productList = this.productList.concat(this.balsarDataJSON); 
        });
    this.productListService.getProductList(this.camsonJSON_URL)
      .subscribe((data)=>{
        this.camsonDataJSON = data;
        this.productList = this.productList.concat(data);
      });
    this.productListService.getProductList(this.arunodayaJSON_URL)
      .subscribe((data)=>{
        this.arunodayaDataJSON = data;
        this.productList = this.productList.concat(data);
      });

    
  }    
}
