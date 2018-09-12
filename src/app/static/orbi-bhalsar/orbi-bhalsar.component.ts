import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
@Component({
  selector: 'anms-orbi-bhalsar',
  templateUrl: './orbi-bhalsar.component.html',
  styleUrls: ['./orbi-bhalsar.component.scss']
})
export class OrbiBhalsarComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  

  constructor() { }
  ngOnInit() {
  }
  

  public getProducts() : any[] {
  return this.bhalsarList;
  }
  

  
  public getProductById(prodId): any {
  //let res = this.getProducts()[0];
  return this.getProducts().filter(function(o){
  if(o.prodId === prodId)
  return o;
  })[0];
  }
  
  public bhalsarList: any = [{
    "providerComp":"BHALSAR",
    "prodId": "BSI-VIRTUE",
    "prodImg": "Bhalsar1.png",
    "prodTitle": "BSI-VIRTUE",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "Green net"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "38-42"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2.3"
    },{
    "propName": "Market Area",
    "propValue": "Thai/Indonesia/Malaysia"
    }]
    },
   {
    "providerComp":"BHALSAR",
    "prodId": "BSI-PRINCE",
    "prodImg": "Bhalsar2.png",
    "prodTitle": "BSI-PRINCE",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "yellow"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2.3"
    },{
    "propName": "Market Area",
    "propValue": "Thai/Myanmar/Vietnam/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI Golden Ball",
    "prodImg": "Bhalsar3.png",
    "prodTitle": "BSI Golden Ball",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "yellow"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "35-38"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2.3"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/Myanmar/Vietnam/India"
    }]
 },
 
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI-449",
    "prodImg": "Bhalsar4.png",
    "prodTitle":"BSI - 449",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "yellow"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "35-38"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2.2"
    },{
    "propName": "Market Area",
    "propValue": "Indonesia"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI-AKANY",
    "prodImg": "Bhalsar5.png",
    "prodTitle": "BSI-AKANY",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "yellow"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "White"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "35-38"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/Myanmar/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI-LAURA",
    "prodImg": "Bhalsar6.png",
    "prodTitle": "BSI-LAURA",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "Yellow net"
    },{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "White-Green"
    },{
    "propName": "Flesh texture",
    "propValue": "Soft"
    },{
    "propName": "Brix",
    "propValue": "14-15"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "35-38"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-2"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/Indonesia//India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI - 2002",
    "prodImg": "Bhalsar7.png",
    "prodTitle": "BSI - 2002",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "Yellow net"
    },{
    "propName": "Fruit shape",
    "propValue": "Oblong"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "11-12"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "45-50"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.8-3.2"
    },{
    "propName": "Market Area",
    "propValue": "Myanmar/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI-2005",
    "prodImg": "Bhalsar8.png",
    "prodTitle": "BSI-2005",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "Yellow"
    },{
    "propName": "Fruit shape",
    "propValue": "Oblong"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange-White"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "10-11"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "23-28"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "45-50"
    },{
    "propName": "Weight/Fruit",
    "propValue": "2.2-5"
    },{
    "propName": "Market Area",
    "propValue": "Myanmar/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSI-2006",
    "prodImg": "Bhalsar9.png",
    "prodTitle": "BSI-2006",
    "properties":[{
    "propName": "Fruit skin",
    "propValue": "Yellow net"
    },{
    "propName": "Fruit shape",
    "propValue": "Oblong"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange-White"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Brix",
    "propValue": "13-14"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "24-34"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "45-50"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-3.2"
    },{
    "propName": "Market Area",
    "propValue": "Myanmar/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSSL -111",
    "prodImg": "Bhalsar10.png",
    "prodTitle": "BSSL -111(Seedless)",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Red"
    },{
    "propName": "Brix",
    "propValue": "11-12"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "30-35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "4-6"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/India/Indinesia"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSSL - 112",
    "prodImg": "Bhalsar11.png",
    "prodTitle": "BSSL - 112",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Red"
    },{
    "propName": "Brix",
    "propValue": "12-13"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "30-35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "2.5-3"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSSY - 666",
    "prodImg": "Bhalsar12.png",
    "prodTitle": "BSSY - 666",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Oblong"
    },{
    "propName": "Flesh colour",
    "propValue": "Red"
    },{
    "propName": "Flesh texture",
    "propValue": "Crispy"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "30-35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "2.5-3"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/India"
 },{
    "propName": "Seed Color",
    "propValue": "Black"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSSY - 667",
    "prodImg": "Bhalsar13.png",
    "prodTitle": "BSSY - 667",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Ovule"
    },{
    "propName": "Flesh colour",
    "propValue": "Red"
    },{
    "propName": "Brix",
    "propValue": "12-13"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "30-35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "2.5-3"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/India"
     },{
    "propName": "Seed Color",
    "propValue": "Black"
    }]
 },
 
 {
    "providerComp":"BHALSAR",
    "prodId":"BSSR - 668",
    "prodImg": "Bhalsar14.png",
    "prodTitle": "BSSR - 668",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Oblong"
    },{
    "propName": "Flesh colour",
    "propValue": "Red"
    },{
    "propName": "Brix",
    "propValue": "12-13"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "27-30"
    },{
    "propName": "Weight/Fruit",
    "propValue": "1.5-3.5"
    },{
    "propName": "Market Area",
    "propValue": "India"
     },{
    "propName": "Seed Color",
    "propValue": "Brown"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSPK -778",
    "prodImg": "Bhalsar15.png",
    "prodTitle": "BSPK -778",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Flat"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Skin Color",
    "propValue": "Light Brown"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "25-30"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "30-35"
    },{
    "propName": "Weight/Fruit",
    "propValue": "2.5-3"
    },{
    "propName": "Market Area",
    "propValue": "Thailand/India"
    }]
 },
 {
    "providerComp":"BHALSAR",
    "prodId":"BSPK -779",
    "prodImg": "Bhalsar16.png",
    "prodTitle": "BSPK -778",
    "properties":[{
    "propName": "Fruit shape",
    "propValue": "Flat"
    },{
    "propName": "Flesh colour",
    "propValue": "Orange"
    },{
    "propName": "Skin Color",
    "propValue": "Light Brown"
    },{
    "propName": "Day of pollinate after transplanting",
    "propValue": "40-45"
    },{
    "propName": "Day of Harvesting after pollinate",
    "propValue": "55-60"
    },{
    "propName": "Weight/Fruit",
    "propValue": "3-7"
    },{
    "propName": "Market Area",
    "propValue": "India/Philippines"
    }]
 
  }]
          
  
  }