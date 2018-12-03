import { Component, OnInit } from "@angular/core";
import { environment as env } from "@env/environment";
import { ROUTE_ANIMATIONS_ELEMENTS } from "@app/core";
//import { Observable } from '@rxjs/Observable';
import { ProductListService } from "@app/static/services/productList.service";
import { ProductListData } from "@app/static/services/model/productList";
import {productFilterPipe} from "../../Pipes/product-filter.pipe";

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
  private camsonDataJSON: ProductListData[] = [];
  private arunodayaDataJSON: ProductListData[] = [];
  public productList: ProductListData[] = [];
  public SearchProduct: any = [];
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;
  private productFilter :productFilterPipe[];
  
  constructor(public productListService: ProductListService) { 
  }
  
  ngOnInit() {
    this.productListService.getProductList(this.balsarJSON_URL)
      .subscribe((data)=>{
          this.balsarDataJSON=data; 
          this.productList = this.productList.concat(this.balsarDataJSON,this.camsonDataJSON,this.arunodayaDataJSON); 
          console.log(this.productList);
        });
    /*this.productListService.getProductList(this.camsonJSON_URL)
      .subscribe((data)=>{
        this.camsonDataJSON = data;
        this.productList = this.productList.concat(this.balsarDataJSON);
      });
    this.productListService.getProductList(this.arunodayaJSON_URL)
      .subscribe((data)=>{
        this.arunodayaDataJSON = data;
        this.productList = this.productList.concat(data);
        this.productList.length;
      });*/
      
      }
      public ProductFilter() : void {
        var searchIndex=this.SearchProduct;
        searchIndex.length();
        console.log("The result ")
        var _this = this;
        var products_local = JSON.parse(JSON.stringify(this.productList))
        this.productList = products_local.filter(
          function(o){  
            if((''+JSON.stringify(o)).indexOf(_this.SearchProduct) !== -1)
            return o;
          }
          
        );
        
        }
        
      }
     
