import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
@Component({
  selector: 'anms-orbi-camson',
  templateUrl: './orbi-camson.component.html',
  styleUrls: ['./orbi-camson.component.scss']
})
export class OrbiCamsonComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  

  constructor() { }
  ngOnInit() {
  }
  

  public getProducts() : any[] {
  return this.camsonList;
  }
  

  
  public getProductById(prodId): any {
  //let res = this.getProducts()[0];
  return this.getProducts().filter(function(o){
  if(o.prodId === prodId)
  return o;
  })[0];
  }
  
  public camsonList: any = [{
    "providerComp":"CAMSON",
    "prodImg": "camson1.png",
    "prodTitle": "SABARI",
    "properties":[{
    "propName": "Plant vigor",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Dark green"
    },{
    "propName": "Fruit Color",
    "propValue": "Yellowish Netted"
    },{
    "propName": "Fruit Size",
    "propValue": "1-1.5kgs"
    },{
    "propName": "Fruit Shape",
    "propValue": "Round"
    },{
    "propName": "Fruit Surface",
    "propValue": "Netted"
    },{
    "propName": "Days to Maturity",
    "propValue": "45-50 days"
    },
  {
  "propName": "Fruit Cavity",
    "propValue": "Small to Medium"
  },{
  "propName": "Fruit Flesh quality",
    "propValue": "Green"
  },{
  "propName": "TSS",
    "propValue": "13-15%"
  }]
    },{
        "providerComp":"CAMSON",
        "prodImg": "camson2.png",
        "prodTitle": "CHAMBAL",
        "properties":[{
        "propName": "Type",
        "propValue": "Cantaloupe"
        },{
        "propName": "Days to maturity(DS)",
        "propValue": "Green: 65-70"
        },{
        "propName": "Fruit size (kg)",
        "propValue": "Round to Oval"
        },{
        "propName": "Netting on fruit",
        "propValue": "Good"
        },{
        "propName": "Flesh colour",
        "propValue": "Deep salmon"
        },{
        "propName": "Flesh texture",
        "propValue": "Good"
        },{
        "propName": "Seed cavity",
        "propValue": "Small"
        },{
        "propName": "Fruit Flesh quality",
        "propValue": "Green"
        },{
        "propName": "TSS",
        "propValue": "13-14%"
        }]
        },
        {
          "providerComp":"CAMSON",
          "prodImg": "camson3.png",
          "prodTitle": "Maize F1(S. Cross)",
          "properties":[{
            "propName": "Plant vigor",
            "propValue": "High"
            },{
            "propName": "Foliage color",
            "propValue": "Green"
            },{
            "propName": "Fruit Color",
            "propValue": "Green to mottled green"
            },{
            "propName": "Fruit Length",
            "propValue": "19-22 cms"
            },{
            "propName": "Fruit Surface",
            "propValue": "White spine"
            },{
            "propName": "Days to Produce",
            "propValue": "43-45 days"
            }]
          },
          {
            "providerComp":"CAMSON",
            "prodImg": "camson4.png",
            "prodTitle": "LOHIT",
            "properties":[{
            "propName": "Days to 1st Picking",
            "propValue": "50-55 Day"
            },{
            "propName": "Fruit Shape",
            "propValue": "Medium long"
            },{
            "propName": "Fruit Colour",
            "propValue": "Dark Green with sharp prickles"
            },{
            "propName": "Toothing",
            "propValue": "Very good"
            },{
            "propName": "Avg. Fruit Length",
            "propValue": "18-22 cm"
            },{
            "propName": "Fruit Weight",
            "propValue": "100-120 g"
            }]
            },
            {
              "providerComp":"CAMSON",
              "prodImg": "camson5.png",
              "prodTitle": "TUNGA",
              "properties":[{
              "propName": "Days to 1st Picking",
              "propValue": "50-55 Day"
              },{
              "propName": "Fruit Shape",
              "propValue": "Short spindle"
              },{
              "propName": "Fruit Colour",
              "propValue": "Dark Green with dense prickles"
              },{
              "propName": "Toothing",
              "propValue": "Good Toothing"
              },{
              "propName": "Avg. Fruit Length",
              "propValue": "100-150 g"
              },{
              "propName": "Fruit Weight",
              "propValue": "100-150 g"
              }]
              },
              {
    "providerComp":"CAMSON",
    "prodImg": "camson6.png",
    "prodTitle": "SABARI",
    "properties":[{
    "propName": "Plant vigor",
    "propValue": "Vigorous"
    },{
    "propName": "Foliage color",
    "propValue": "Green to Dark Green"
    },{
    "propName": "Fruit Color",
    "propValue": "Glossy Green."
    },{
    "propName": "Fruit Shape",
    "propValue": "Cylindrical long"
    },{
    "propName": "Fruit Length (cm)",
    "propValue": "50-55"
    },{
    "propName": "Fruit surface",
    "propValue": ":Smooth"
    },{
    "propName": "Days to first pick",
    "propValue": ":60-65 days"
  },{
      "propName": "Avg. fruit Weight",
      "propValue": "150-175 g"
   }]},
   {
              "providerComp":"CAMSON",
              "prodImg": "camson7.png",
              "prodTitle": "BARASTA",
              "properties":[{
              "propName": "Days to 1st Picking",
              "propValue": "40-45 Day"
              },{
              "propName": "Fruit length",
              "propValue": "25 cm"
              },{
              "propName": "Fruit Colour",
              "propValue": "Dark Green"
              },{
              "propName": "Avg. fruit Weight",
              "propValue": "150-175 g"
              }]},
  {
              "providerComp":"CAMSON",
              "prodImg": "camson8.png",
              "prodTitle": "DHUBRI",
              "properties":[{
              "propName": "Days to 1st Picking",
              "propValue": "46-48 days"
              },{
              "propName": "Fruit length",
              "propValue": "22-24 cm"
              },{
              "propName": "Fruit Colour",
              "propValue": "Light Green"
              },{
              "propName": "Avg. fruit Weight",
              "propValue": "50-175 g"
              }]},
              {
              "providerComp":"CAMSON",
              "prodImg": "camson9.png",
              "prodTitle": "KAUVERI",
              "properties":[{
              "propName": "Days to 1st Picking",
              "propValue": "40-45 Days"
              },{
              "propName": "Avg. Fruit length",
              "propValue": "35-45 cm"
              },
  {
              "propName": "Fruit Shape",
              "propValue": "Long slender"
  
  },{
              "propName": "Fruit Colour",
              "propValue": "Light Green"
              },{
              "propName": "Avg. Fruit Weight",
              "propValue": "175-200 g"
               }]},
               {
    "providerComp":"CAMSON",
    "prodImg": "camson10.png",
    "prodTitle": "KUNO",
    "properties":[{
    "propName": "Plant vigor",
    "propValue": "Vigorous"
    },{
    "propName": "Fruit shape",
    "propValue": "Flattish round"
    },{
    "propName": "First Picking",
    "propValue": "55 – 60"
    },{
    "propName": "Fruit Colour",
    "propValue": "Dark green with Marbled shade"
    },{
    "propName": "Fruit Weight",
    "propValue": "3-4 kg"
    },{
    "propName": "Flesh Colour@Ripen",
    "propValue": ":Yellowish orange"
    },{
    "propName": "Flesh Thickness",
    "propValue": ":4-5 cm"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson11.png",
    "prodTitle": "DAMODAR",
    "properties":[{
    "propName": "Plant habit",
    "propValue": "Vigorous"
    },{
    "propName": "First harvest (days)",
    "propValue": "45-50"
    },{
    "propName": "Fruit shape",
    "propValue": "Round"
    },{
    "propName": "Fruit skin colour",
    "propValue": "Light green to green"
    },{
    "propName": "Taste",
    "propValue": "Very tasty and tender"
    },{
    "propName": "Average fruit size(g)",
    "propValue": "60-70"
    },{
    "propName": "USP’s",
    "propValue": "Very early fruiting and very good taste, Uniform size and very tender"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson12.png",
    "prodTitle": "F1 DHARMA",
    "properties":[{
    "propName": "Root Length",
    "propValue": "Long (28-32 cm)"
    },{
    "propName": "Root Shape",
    "propValue": "Cylindrical apering"
    },{
    "propName": "Root Surface",
    "propValue": "Smooth"
    },{
    "propName": "Root End",
    "propValue": "Obtuse"
    },{
    "propName": "Root Flesh",
    "propValue": "Crispy"
    },{
    "propName": "Pungency",
    "propValue": "Mild"
    },{
    "propName": "Maturity",
    "propValue": "35-40 days"
    }]}
    ,{
    "providerComp":"CAMSON",
    "prodImg": "camson13.png",
    "prodTitle": "F1 - GOINI",
    "properties":[{
    "propName": "Root Length",
    "propValue": "Long (35-38 cm)"
    },{
    "propName": "Root Shape",
    "propValue": "Triangular"
    },{
    "propName": "Root Surface",
    "propValue": "Smooth"
    },{
    "propName": "Root End",
    "propValue": "Acute"
    },{
    "propName": "Root Flesh",
    "propValue": "Crispy"
    },{
    "propName": "Pungency",
    "propValue": "Mild"
    },{
    "propName": "Maturity",
    "propValue": "60-65 days"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson14.png",
    "prodTitle": "KOSI",
    "properties":[{
    "propName": "Days to maturity",
    "propValue": "65-70 days"
    },{
    "propName": "Plant habit",
    "propValue": "Erect"
    },{
    "propName": "Root Surface",
    "propValue": "Green"
    },{
    "propName": "Curd shape",
    "propValue": "Dome"
    },{
    "propName": "Curd color",
    "propValue": "White"
    },{
    "propName": "Av. Curd weight",
    "propValue": "900 gms."
    },{
    "propName": "Curd compactness",
    "propValue": "good"
    },{
    "propName": "Avg.curding temp.",
    "propValue": "20-270 C"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson15.png",
    "prodTitle": "KAPILA",
    "properties":[{
    "propName": "Days to maturity",
    "propValue": "70-75 days"
    },{
    "propName": "Plant habit",
    "propValue": "Erect"
    },{
    "propName": "Root Surface",
    "propValue": "Green"
    },{
    "propName": "Curd shape",
    "propValue": "Dome"
    },{
    "propName": "Curd color",
    "propValue": "White"
    },{
    "propName": "Av. Curd weight",
    "propValue": "1-1.25 kgs."
    },{
    "propName": "Curd compactness",
    "propValue": "Very good"
    },{
    "propName": "Avg.curding temp.",
    "propValue": "15 -240 C"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson16.png",
    "prodTitle": "NEELUM",
    "properties":[{
    "propName": "Days to maturity",
    "propValue": "50-55 days"
    },{
    "propName": "Plant habit",
    "propValue": "Medium"
    },{
    "propName": "Leaf color",
    "propValue": "Green"
    },{
    "propName": "Head shape",
    "propValue": "Dome"
    },{
    "propName": "Head color",
    "propValue": "White"
    },{
    "propName": "Av. Head weight",
    "propValue": "1-1.25 kgs."
    },{
    "propName": "Compactness",
    "propValue": "Compact"
    },{
    "propName": "FHA",
    "propValue": "Good"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson17.png",
    "prodTitle": "JHELUM",
    "properties":[{
    "propName": "Days to maturity",
    "propValue": "65-70 days"
    },{
    "propName": "Plant habit",
    "propValue": "Medium"
    },{
    "propName": "Leaf color",
    "propValue": "Green"
    },{
    "propName": "Head shape",
    "propValue": "oval round"
    },{
    "propName": "Head color",
    "propValue": "Bluish Green"
    },{
    "propName": "Av. Head weight",
    "propValue": "1-1.25 kgs."
    },{
    "propName": "Compactness",
    "propValue": "Very Compact"
    },{
    "propName": "FHA",
    "propValue": "Good"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson18.png",
    "prodTitle": "ULHAS",
    "properties":[{
    "propName": "Days to maturity",
    "propValue": "65-70 days"
    },{
    "propName": "Shape",
    "propValue": "Flattish Round"
    },{
    "propName": "Root color",
    "propValue": "Dark Red"
    },{
    "propName": "Root Surface",
    "propValue": "Smooth"
    },{
    "propName": "Flash color",
    "propValue": "Dark Red"
    },{
    "propName": "Root Top",
    "propValue": "Medium"
    },{
    "propName": "Sweetness",
    "propValue": "Good"
    },{
    "propName": "Maturity",
    "propValue": "70-75 Days"
    }]}
    ,{
    "providerComp":"CAMSON",
    "prodImg": "camson19.png",
    "prodTitle": "MAHI",
    "properties":[{
    "propName": "First Picking",
    "propValue": "75–80 days"
    },{
    "propName": "Pod Shape",
    "propValue": "Flattish Round & Straight"
    },{
    "propName": "Pod Length",
    "propValue": "10 –12"
    },{
    "propName": "Pod Colour",
    "propValue": "Dark Green"
    },{
    "propName": "Taste",
    "propValue": "Sweet"
    },{
    "propName": "Grains/Pod",
    "propValue": "8 –10 Uniform Size"
    },{
    "propName": "Sweetness",
    "propValue": "Very Good"
    },{
    "propName": "Disease Tolerance",
    "propValue": "Very Good"
    },{
    "propName": "Pod Appreance",
    "propValue": "Very Attractive"
    }]}
    ,{
    "providerComp":"CAMSIN",
    "prodImg": "camson20.png",
    "prodTitle": "ROHINI",
    "properties":[{
    "propName": "Crop Duration",
    "propValue": "100 to 120 days"
    },{
    "propName": "tenderpod quality",
    "propValue": "Excellent"
    },{
    "propName": "Podlength",
    "propValue": "12to15 cm"
    },{
    "propName": "Pod Colour",
    "propValue": "Shining green"
    },{
    "propName": "To be changed",
    "propValue": "Single stemmed plant"
    },{
    "propName": "To be changed",
    "propValue": "Growing summer and rainy season"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson21.png",
    "prodTitle": "JALANGI",
    "properties":[{
    "propName": "Plant habit",
    "propValue": "Vigorous and erect plant"
    },{
    "propName": "Harvesting starts in (days)",
    "propValue": "25- 30 days, multicut"
    },{
    "propName": "Leaf colour",
    "propValue": "Light green/Green"
    },{
    "propName": "Leaf type",
    "propValue": "Broad leaves"
    },{
    "propName": "Others",
    "propValue": "Late bolting, Good branching, high yielder, multicuts, leathary fresh glossy leaves."
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson22.png",
    "prodTitle": "MANSAROVAR",
    "properties":[{
    "propName": "Cob size",
    "propValue": "Medium"
    },{
    "propName": "Cob L(cm)",
    "propValue": "16-18"
    },{
    "propName": "Tip filling",
    "propValue": "Average"
    },{
    "propName": "Cob shape",
    "propValue": "Cylindrical"
    },{
    "propName": "Sugar content",
    "propValue": ">15"
    },{
    "propName": "Sugar retention",
    "propValue": "High (keep for long period)"
    },{
    "propName": "Chewing quality",
    "propValue": "Chewing quality"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson23.png",
    "prodTitle": "MERICOM",
    "properties":[{
    "propName": "Plant Height",
    "propValue": "4 - 4.5 ft"
    },{
    "propName": "Colour",
    "propValue": "Attractive Deep Gold"
    },{
    "propName": "Maturity",
    "propValue": "58 - 62 days after transplanting"
    },{
    "propName": "Remarks",
    "propValue": "Good keeping quality tolerant to major disease & virus"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson24.png",
    "prodTitle": "MERISON",
    "properties":[{
    "propName": "Plant Height",
    "propValue": "4 - 4.5 ft"
    },{
    "propName": "Colour",
    "propValue": "Attractive Dark Yellow"
    },{
    "propName": "Maturity",
    "propValue": "58 - 62 days after transplanting"
    },{
    "propName": "Remarks",
    "propValue": "Excellent keeping quality tolerant to major disease & virus"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson25.png",
    "prodTitle": "SATLUJ - GOLD",
    "properties":[{
    "propName": "Plant type",
    "propValue": "Tall"
    },{
    "propName": "Plant foliage color",
    "propValue": "Dark Green"
    },{
    "propName": "Plant Architecture",
    "propValue": "Erect and strong"
    },{
    "propName": "Days to Produce",
    "propValue": "40-45 days"
    },{
    "propName": "Fruit Color",
    "propValue": "Dark Green"
    },{
    "propName": "Fruit Length",
    "propValue": "10-12 cm"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson26.png",
    "prodTitle": "NANDI +",
    "properties":[{
    "propName": "Plant type",
    "propValue": "Tall"
    },{
    "propName": "Plant foliage color",
    "propValue": "Dark Green"
    },{
    "propName": "Plant Architecture",
    "propValue": "Erect and strong"
    },{
    "propName": "Days to Produce",
    "propValue": "40-45 days"
    },{
    "propName": "Fruit Color",
    "propValue": "Dark Green"
    },{
    "propName": "Fruit Length",
    "propValue": "8-10 cm"
    },{
    "propName": "Remarks",
    "propValue": "Good keeping quality tolerant to major disease & virus"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson27.png",
    "prodTitle": "BEAS",
    "properties":[{
    "propName": "Plant Habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Square Round"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "5 -6"
    },{
    "propName": "Fruit weight",
    "propValue": "90-100 gms."
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Very high"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson28.png",
    "prodTitle": "SONGANGA",
    "properties":[{
    "propName": "Plant Habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Square Round"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "5 -6"
    },{
    "propName": "Fruit weight",
    "propValue": "85-95g"
    },{
    "propName": "Fruit Colour",
    "propValue": "Red"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Very high"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson29.png",
    "prodTitle": "SWARNAGANGA",
    "properties":[{
    "propName": "Plant Habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Square Round"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "5 -6"
    },{
    "propName": "Fruit weight",
    "propValue": "90-100g"
    },{
    "propName": "Fruit Colour",
    "propValue": "Red"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Very high"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson30.png",
    "prodTitle": "AKASH GANGA",
    "properties":[{
    "propName": "Plant growth Habit",
    "propValue": " Determinate"
    },{
    "propName": "Fruit firmness",
    "propValue": "Medium"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "4-5"
    },{
    "propName": "Fruit color",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit Shape",
    "propValue": "Flattish round"
    },{
    "propName": "Fruit size",
    "propValue": "80-90g"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson31.png",
    "prodTitle": "BANGANGA",
    "properties":[{
    "propName": "Plant Habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Oblate Round"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "4-5"
    },{
    "propName": "Fruit firmness",
    "propValue": "Medium"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red with green shoulder"
    },{
    "propName": "Fruit Size",
    "propValue": "90-95g"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson32.png",
    "prodTitle": "NALGANGA",
    "properties":[{
    "propName": "Growth habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Flat Round"
    },{
    "propName": "Earliness",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit firmness",
    "propValue": "Excellent Firm"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Av- Fruit Wt",
    "propValue": "90-95g"
    },{
    "propName": "Shoulder colour",
    "propValue": "dark green"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson33.png",
    "prodTitle": "PATALGANGA",
    "properties":[{
    "propName": "Growth habit",
    "propValue": " Semi Determinate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Flattish Round"
    },{
    "propName": "Earliness",
    "propValue": "65-65 days"
    },{
    "propName": "Fruit firmness",
    "propValue": "Excellent Firm"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Av- Fruit Wt",
    "propValue": "90-95g"
    },{
    "propName": "Shoulder colour",
    "propValue": "Uniform green"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson34.png",
    "prodTitle": "RAMGANGA",
    "properties":[{
    "propName": "Plant Habit",
    "propValue": " Indeterminate"
    },{
    "propName": "Fruit Shape",
    "propValue": "Flattish Round"
    },{
    "propName": "No. of fruits/cluster",
    "propValue": "5-6"
    },{
    "propName": "Fruit firmness",
    "propValue": "Firm"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit Size",
    "propValue": "80-90 g"
    },{
    "propName": "Maturity",
    "propValue": "70-75 days"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson35.png",
    "prodTitle": "BETWA",
    "properties":[{
    "propName": "Growth habit",
    "propValue": "Indeterminate/ Creeper type"
    },{
    "propName": "No of Fruits /clusters",
    "propValue": "12-14"
    },{
    "propName": "Shoulder colour",
    "propValue": "Green Shoulder"
    },{
    "propName": "Maturity",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit shape",
    "propValue": "Oval"
    },{
    "propName": "Fruit size",
    "propValue": "8-9 g"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson36.png",
    "prodTitle": "KEN",
    "properties":[{
    "propName": "Growth habit",
    "propValue": "Indeterminate/ Creeper type"
    },{
    "propName": "No of Fruits /clusters",
    "propValue": "14-16"
    },{
    "propName": "Shoulder colour",
    "propValue": "Green Shoulder"
    },{
    "propName": "Maturity",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit shape",
    "propValue": "Oval"
    },{
    "propName": "Fruit size",
    "propValue": "8-9 g"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Medium Firm"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson37.png",
    "prodTitle": "KEN",
    "properties":[{
    "propName": "Growth habit",
    "propValue": "Indeterminate/ Creeper type"
    },{
    "propName": "No of Fruits /clusters",
    "propValue": "14-16"
    },{
    "propName": "Shoulder colour",
    "propValue": "Green Shoulder"
    },{
    "propName": "Maturity",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Red"
    },{
    "propName": "Fruit shape",
    "propValue": "Oval"
    },{
    "propName": "Fruit size",
    "propValue": "8-9 g"
    },{
    "propName": "Fruit Firmness",
    "propValue": "Medium Firm"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson38.png",
    "prodTitle": "PENNAR",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect & Bushy 1ST Picking"
    },{
    "propName": "Green(DOP)",
    "propValue": "70-75 days 1ST Picking"
    },{
    "propName": "Red Ripe(DOP)",
    "propValue": "110-120 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with glossy semi wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(7.5-8.5)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.8 to 1.0"
    },{
    "propName": "Pungency",
    "propValue": "High"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson39.png",
    "prodTitle": "SHIPRA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect / Upright 1ST Pcking"
    },{
    "propName": "Green(DOP)",
    "propValue": "70-75 days 1ST Picking"
    },{
    "propName": "Red Ripe(DOP)",
    "propValue": "110-120 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with glossy semi wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(7-9 cm)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.8 to 1.0"
    },{
    "propName": "Pungency",
    "propValue": "High"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson40.png",
    "prodTitle": "BHAGIRATHI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pale Green with glossy slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(11-12)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.9 to 1.0"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson41.png",
    "prodTitle": "SAVITRI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pale Green with glossy slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(14-15)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.8 to 0.9"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson42.png",
    "prodTitle": "PURNA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pale Green with glossy slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(14-15)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.9 to 1.0"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson43.png",
    "prodTitle": "MANER",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pale Green with glossy slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(8-9)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.8 to 0.9"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson44.png",
    "prodTitle": "TAPTI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect and open type"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pale Green with glossy slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(15-17)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.2 to 1.3"
    },{
    "propName": "Pungency",
    "propValue": "Low"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson45.png",
    "prodTitle": "GOMTI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect and open type"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "D.Green with glossy lightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(10-11)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.9-1.0"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson46.png",
    "prodTitle": "NARMADA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect and open type"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Dark green with slightly wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Medium Long(10-12)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "0.9-1.0"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
    {
    "providerComp":"CAMSON",
    "prodImg": "camson47.png",
    "prodTitle": "TARINI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi Erect & open"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with smooth glossy surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Long(14-15)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.0-1.1"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson48.png",
    "prodTitle": "UMA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi Erect & open"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with smooth glossy surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Long(12-14)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.2-1.4"
    },{
    "propName": "Pungency",
    "propValue": "Low"
    }]},{
      "providerComp":"CAMSON",
    "prodImg": "camson49.png",
    "prodTitle": "MUSI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Umbrella type open"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with smooth glossy surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Long(09-10)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.1-1.2"
    },{
    "propName": "Pungency",
    "propValue": "Low"
    },{
    "propName": "Pungency",
    "propValue": "Low"
    }]},
  {
  "providerComp":"CAMSON",
    "prodImg": "camson50.png",
    "prodTitle": "NAGI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect and upright"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Light green with glossy wrinkled surface"
    },{
    "propName": "Fruit length(cm)",
    "propValue": "Long(14-16)"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.2-1.3"
    },{
    "propName": "Pungency",
    "propValue": "Medium"
    }]},
       {
    "providerComp":"CAMSON",
    "prodImg": "camson51.png",
    "prodTitle": "PAMBA",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "Vigorous"
    },{
    "propName": "Fruit shape",
    "propValue": "Blocky 4 lobes"
    },{
    "propName": "Fruit Colour",
    "propValue": "Dark green"
    },{
    "propName": "Fruit Weight",
    "propValue": "125-150 g"
    },{
    "propName": "Fruit girth(cm)",
    "propValue": "1.2-1.4"
    },{
    "propName": "Days to maturity",
    "propValue": "65-70 Day"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson52.png",
    "prodTitle": "PALAR",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "Vigorous"
    },{
    "propName": "Fruit shape",
    "propValue": "Blocky 4 lobes"
    },{
    "propName": "Fruit Colour & Placement",
    "propValue": "Green, Upright"
    },{
    "propName": "Fruit Weight",
    "propValue": "50-75 g"
    },{
    "propName": "Ripen skin colour",
    "propValue": "Deep Red"
    },{
    "propName": "Days to maturity",
    "propValue": "65-70 Day"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson53.png",
    "prodTitle": "KRISHNA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "70-75 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep violet with purplish green calyx"
    },{
    "propName": "Shape",
    "propValue": "Roundish"
    },{
    "propName": "Fruit Size",
    "propValue": "250-300 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson54.png",
    "prodTitle": "GODAVARI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi erect bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "70-75 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Dark purple with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Big Oval round"
    },{
    "propName": "Fruit Size",
    "propValue": "200-250 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson55.png",
    "prodTitle": "SATI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "75-80 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Dark purple with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Big Oblong"
    },{
    "propName": "Fruit Size",
    "propValue": "200-250 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson56.png",
    "prodTitle": "SONE",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi- Erect Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Blackish with green calyx"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "80-100 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson57.png",
    "prodTitle": "KUMARDHARA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi- Erect Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "55-60 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pinkish with green calyx"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "75-90 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson58.png",
    "prodTitle": "BHADRAVATI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi- Erect Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "55-60 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pinkish with green calyx"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "80-90 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson59.png",
    "prodTitle": "YAMUNOTRY",
    "properties":[{
    "propName": "Habit",
    "propValue": "Semi- Erect Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "55-60 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Purple variegated striped(Manjarigota)"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "80-90 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson60.png",
    "prodTitle": "DHANSRI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Purple variegated striped"
    },{
    "propName": "Calyx",
    "propValue": "Green with spiny"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "90-100 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson61.png",
    "prodTitle": "TUNGABHADRA",
    "properties":[{
    "propName": "Habit",
    "propValue": "Semi erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "65-70 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with Purple variegated"
    },{
    "propName": "Calyx",
    "propValue": "Green with spiny"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "90-100 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson62.png",
    "prodTitle": "MAHANADI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi erect & Bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Geen Variagated with green calyxd"
    },{
    "propName": "Shape",
    "propValue": "oval"
    },{
    "propName": "Fruit Size",
    "propValue": "80-100 gm"
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson63.png",
    "prodTitle": "MANDAKINI",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "55-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Violet with Purplish green calyx"
    },{
    "propName": "Shape",
    "propValue": "Elongated long"
    },{
    "propName": "Fruit weight",
    "propValue": "80-100 gm."
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson64.png",
    "prodTitle": "MANJIRA",
    "properties":[{
    "propName": "Habit",
    "propValue": "Semi- erect bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "50-60 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Pinkish with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Long"
    },{
    "propName": "Fruit weight",
    "propValue": "70-80 gm."
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson65.png",
    "prodTitle": "BARAK",
    "properties":[{
    "propName": "Habit",
    "propValue": "Semi- erect & upright"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Purple with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Long"
    },{
    "propName": "Fruit weight",
    "propValue": "70-90 gm."
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson66.png",
    "prodTitle": "PERIYAR",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Erect bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "Deep Purple with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Long"
    },{
    "propName": "Fruit weight",
    "propValue": "70-90 gm."
    }]},{
  "providerComp":"CAMSON",
    "prodImg": "camson67.png",
    "prodTitle": "SWEATA",
    "properties":[{
    "propName": "Plant Type",
    "propValue": "Semi erect bushy"
    },{
    "propName": "1ST Picking (DOP)",
    "propValue": "60-65 days"
    },{
    "propName": "Fruit Colour",
    "propValue": "White with green calyx"
    },{
    "propName": "Shape",
    "propValue": "Long"
    },{
    "propName": "Fruit weight",
    "propValue": "70-90 gm."
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson68.png",
    "prodTitle": "CHANDRAPRABHAVATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Light green with dark green stripes"
    },{
    "propName": "Avg. Fruit",
    "propValue": "8-10 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "oblong"
    },{
    "propName": "Days to Produce",
    "propValue": "90 days"
    },{
    "propName": "TSS",
    "propValue": "9-10"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson69.png",
    "prodTitle": "HEMAVATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "D.Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Light green with dark green stripes"
    },{
    "propName": "Avg. Fruit",
    "propValue": "8-10 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "oblong"
    },{
    "propName": "Days to Produce",
    "propValue": "90 days"
    },{
    "propName": "TSS",
    "propValue": "9-10"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson70.png",
    "prodTitle": "HEMAVATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "D.Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Light green with dark green stripes"
    },{
    "propName": "Avg. Fruit",
    "propValue": "8-10 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "oblong"
    },{
    "propName": "Days to Produce",
    "propValue": "90 days"
    },{
    "propName": "TSS",
    "propValue": "9-10"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson71.png",
    "prodTitle": "AMARAVATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Green with dark green stripes."
    },{
    "propName": "Avg. Fruit",
    "propValue": "8-10 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "oblong"
    },{
    "propName": "Days to Produce",
    "propValue": "90 days"
    },{
    "propName": "TSS",
    "propValue": "9-10"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson72.png",
    "prodTitle": "NETRAVATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Blackish green"
    },{
    "propName": "Avg. Fruit",
    "propValue": "2-3 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "Oval"
    },{
    "propName": "Days to Produce",
    "propValue": "70-75 days"
    },{
    "propName": "TSS",
    "propValue": "13-14"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson73.png",
    "prodTitle": "SONMATI",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Green"
    },{
    "propName": "Fruit Skin Colour",
    "propValue": "Yellow"
    },{
    "propName": "Fruit Flesh Colour",
    "propValue": "Red"
    },{
    "propName": "Fruit flesh texture",
    "propValue": "Crispy,granular"
    },{
    "propName": "Seeds Size",
    "propValue": "Small"
    },{
    "propName": "Avg. Fruit",
    "propValue": "2-3 kgs."
    },{
    "propName": "Fruit shape",
    "propValue": "Oval"
    },{
    "propName": "Days to Produce",
    "propValue": "70-75 days"
    },{
    "propName": "TSS",
    "propValue": "13-14"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson74.png",
    "prodTitle": "GANDHAK",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Dark Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Grey Highly Netted"
    },{
    "propName": "Fruit Size",
    "propValue": "800-1000 g"
    },{
    "propName": "Fruit Shape",
    "propValue": "Round"
    },{
    "propName": "Fruit Flesh quality",
    "propValue": "Green"
    },{
    "propName": "Fruit Surface",
    "propValue": "Netted"
    },{
    "propName": "Days to Maturity",
    "propValue": "42-48 days"
    },{
    "propName": "Fruit Cavity",
    "propValue": "Small"
    },{
    "propName": "TSS",
    "propValue": "12-13%"
    }]},{
    "providerComp":"CAMSON",
    "prodImg": "camson75.png",
    "prodTitle": "NIRA",
    "properties":[{
    "propName": "Plant Vigour",
    "propValue": "High"
    },{
    "propName": "Foliage color",
    "propValue": "Dark Green"
    },{
    "propName": "Fruit Colour",
    "propValue": "Yellow smooth"
    },{
    "propName": "Fruit Size",
    "propValue": "1-1.5kgs"
    },{
    "propName": "Fruit Shape",
    "propValue": "Oval"
    },{
    "propName": "Fruit Inner quality",
    "propValue": "Whitish"
    },{
    "propName": "Fruit Surface",
    "propValue": "Yellow skin"
    },{
    "propName": "Days to Maturity",
    "propValue": "45-50 days"
    },{
    "propName": "Fruit Cavity",
    "propValue": "Small to Medium"
    },{
    "propName": "TSS",
    "propValue": "12-13%"
    }]
  
  }]
          
  
  }