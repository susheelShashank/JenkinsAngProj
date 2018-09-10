import { Injectable } from '@angular/core';
@Injectable()
export class DropDownServiceModule {
 
  constructor() {}
  public getProducts() : any[] {
    return this.productList;
  }
  public getProductById(prodId): any {
      //let res = this.getProducts()[0];
      return this.getProducts().filter(function(o){
        if(o.prodId === prodId)
          return o;
      })[0];
  }
  public productList: any =[{
    "providerComp":"Arunodaya",
    "prodId": "APSA-91",
    "prodImg": "0.png",
    "prodTitle": "Maize F1",
    "properties":
    [{
    "propName": "Plant Height",
    "propValue": "200 to 210 cms"
    },{
    "propName": "Leaf Colour",
    "propValue": "Green"
    },{
    "propName": "Shank Colour",
    "propValue": "White"
    },{
    "propName": "Seed Colour",
    "propValue": "Orange Red"
    },{
    "propName": "Maturity",
    "propValue": "115 to 120 days"
    },{
    "propName": "Recommended Season",
    "propValue": "All Seasons"
    },{
    "propName": "Yield",
    "propValue": "Higher"
    }
    ]}]}
