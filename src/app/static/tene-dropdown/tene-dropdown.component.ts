import { Component, OnInit } from "@angular/core";
import { MatExpansionPanelTitle } from "@angular/material";
import { environment as env } from "@env/environment";
import { ROUTE_ANIMATIONS_ELEMENTS } from "@app/core";

@Component({
  selector: "anms-tene-dropdown",
  templateUrl: "./tene-dropdown.component.html",
  styleUrls: ["./tene-dropdown.component.scss"]
})
export class TeneDropdownComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  constructor() {}
  ngOnInit() {}
  openLink(link: string) {
    window.open(link, "_blank");
  }

  public getProducts(): any[] {
    return this.productList;
  }

  public getProductById(prodId): any {
    //let res = this.getProducts()[0];
    return this.getProducts().filter(function(o) {
      if (o.prodId === prodId) return o;
    })[0];
  }

  public productList: any = [
    {
      providerComp: "Arunodaya",
      prodId: "APSA-91",
      prodImg: "Arunodaya1.png",
      prodTitle: "Maize F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "200 to 210 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Green"
        },
        {
          propName: "Shank Colour",
          propValue: "White"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Red"
        },
        {
          propName: "Maturity",
          propValue: "115 to 120 days"
        },
        {
          propName: "Recommended Season",
          propValue: "All Seasons"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Navee-98",
      prodImg: "Arunodaya2.png",
      prodTitle: "Maize F1(D. Cross)",
      properties: [
        {
          propName: "Plant Height",
          propValue: "195 to 220 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Green"
        },
        {
          propName: "Shank Colour",
          propValue: "White"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Red"
        },
        {
          propName: "Maturity",
          propValue: "115 to 120 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Kharif"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Byrava Super",
      prodImg: "Arunodaya3.png",
      prodTitle: "Maize F1(S. Cross)",
      properties: [
        {
          propName: "Plant Height",
          propValue: "200 to 230 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Dark Green"
        },
        {
          propName: "Shank Colour",
          propValue: "White"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Yellow"
        },
        {
          propName: "Maturity",
          propValue: "120 to 130 days"
        },
        {
          propName: "Recommended Season",
          propValue: "All Seasons"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        },
        {
          propName: "Disease",
          propValue: "Wide adobtability and tolerance to major diseases"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "AMH-6633",
      prodImg: "Arunodaya4.png",
      prodTitle: "Maize F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "200 to 210 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Dark Green"
        },
        {
          propName: "Shank Colour",
          propValue: "Light Red"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Yellow"
        },
        {
          propName: "Maturity",
          propValue: "125 to 130 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Rabi Summer"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Sri Byarava-2468",
      prodImg: "Arunodaya5.png",
      prodTitle: "Maize F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "210 to 230 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Green"
        },
        {
          propName: "Shank Colour",
          propValue: "Light Pink"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Yellow"
        },
        {
          propName: "Maturity",
          propValue: "120 to 125 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Rabi summer/Bihar region"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "JP-2007",
      prodImg: "Arunodaya6.png",
      prodTitle: "Maize F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "200 to 210 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Green"
        },
        {
          propName: "Shank Colour",
          propValue: "White"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange Red"
        },
        {
          propName: "Maturity",
          propValue: "115 to 120 days"
        },
        {
          propName: "Recommended Season",
          propValue: "All Seasons"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "AMH-8109",
      prodImg: "Arunodaya7.png",
      prodTitle: "Maize F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "190 to 200 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Dark Green"
        },
        {
          propName: "Shank Colour",
          propValue: "Pink"
        },
        {
          propName: "Seed Colour",
          propValue: "Orange"
        },
        {
          propName: "Maturity",
          propValue: "115 to 120 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Rabi summer"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "ASH-100",
      prodImg: "Arunodaya8.png",
      prodTitle: "Sunower F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "160 to 165 cms"
        },
        {
          propName: "Head Shape & Size",
          propValue: "Flat & Medium size"
        },
        {
          propName: "Stem Girth",
          propValue: "Medium"
        },
        {
          propName: "Seed Colour",
          propValue: "Black"
        },
        {
          propName: "Maturity",
          propValue: "100 to 105 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Rabi summer"
        },
        {
          propName: "Yield",
          propValue: "High yielder"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "ASH-Monitor",
      prodImg: "Arunodaya9.png",
      prodTitle: "Sunower F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "160 to 165 cms"
        },
        {
          propName: "Head Shape & Size",
          propValue: "Flat & Big"
        },
        {
          propName: "Stem Girth",
          propValue: "Strong"
        },
        {
          propName: "Seed Colour",
          propValue: "Black"
        },
        {
          propName: "Maturity",
          propValue: "85 to 90 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Kharif & Rabi Summer"
        },
        {
          propName: "Yield",
          propValue: "High yielder"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Arunodaya Gold",
      prodImg: "Arunodaya10.png",
      prodTitle: "Sunower F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "150 to 160 cms"
        },
        {
          propName: "Head Shape & Size",
          propValue: "Convex & Big size"
        },
        {
          propName: "Stem Girth",
          propValue: "Strong"
        },
        {
          propName: "Seed Colour",
          propValue: "Black with light strips"
        },
        {
          propName: "Maturity",
          propValue: "88 & 90 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Kharif Rabi Summer"
        },
        {
          propName: "Yield",
          propValue: "High yielder"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "NSH - Apsara",
      prodImg: "Arunodaya11.png",
      prodTitle: "Sunower F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "155 to 165 cms"
        },
        {
          propName: "Head Shape & Size",
          propValue: "Flat & Big size"
        },
        {
          propName: "Stem Girth",
          propValue: "Strong"
        },
        {
          propName: "Seed Colour",
          propValue: "Black"
        },
        {
          propName: "Maturity",
          propValue: "90 to 95 days"
        },
        {
          propName: "Recommended Season",
          propValue: "Kharif Rabi Summer"
        },
        {
          propName: "Yield",
          propValue: "High yielder"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Lakshmi-352",
      prodImg: "Arunodaya12.png",
      prodTitle: "Bajra F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "180 to 200 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Dark Green"
        },
        {
          propName: "Ear Head",
          propValue: "Candle Shape"
        },
        {
          propName: "Grain Colour",
          propValue: "Light Grey"
        },
        {
          propName: "Crop Duration",
          propValue: "85 to 90 days"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Lakshmi-357",
      prodImg: "Arunodaya13.png",
      prodTitle: "Bajra F1",
      properties: [
        {
          propName: "Plant Height",
          propValue: "180 to 200 cms"
        },
        {
          propName: "Leaf Colour",
          propValue: "Dark Green"
        },
        {
          propName: "Ear Head",
          propValue: "Candle Shape"
        },
        {
          propName: "Grain Colour",
          propValue: "Light Grey"
        },
        {
          propName: "Crop Duration",
          propValue: "85 to 90 days"
        },
        {
          propName: "Yield",
          propValue: "Higher"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "APH-8181",
      prodImg: "Arunodaya14.png",
      prodTitle: "Paddy F1 (short duration)",
      properties: [
        {
          propName: "Crop duration",
          propValue: "120 to 125 days"
        },
        {
          propName: "Leaf Colour",
          propValue: "Light Green"
        },
        {
          propName: "Steam",
          propValue: "Green Pollen"
        },
        {
          propName: "Colour",
          propValue: "Yellow"
        },
        {
          propName: "Head Shape",
          propValue: "Compact"
        },
        {
          propName: "Disease",
          propValue: "Tolerance to leaf Blight"
        },
        {
          propName: "Pest Controlled",
          propValue: "Tolerance to Brown Plant Hopper"
        },
        {
          propName: "Grain Type",
          propValue: "Medium"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "APH-9696",
      prodImg: "Arunodaya15.png",
      prodTitle: "Paddy F1 (short duration)",
      properties: [
        {
          propName: "Crop duration",
          propValue: "130 to 135 days"
        },
        {
          propName: "Leaf Colour",
          propValue: "Light Green"
        },
        {
          propName: "Steam",
          propValue: "Green Pollen"
        },
        {
          propName: "Colour",
          propValue: "Yellow"
        },
        {
          propName: "Head Shape",
          propValue: "Compact"
        },
        {
          propName: "Disease",
          propValue: "Tolerance to leaf Blight"
        },
        {
          propName: "Pest Controlled",
          propValue: "Tolerance to Brown Plant Hopper"
        },
        {
          propName: "Grain Type",
          propValue: "Bold"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Sonam 125",
      prodImg: "Arunodaya16.png",
      prodTitle: "Paddy Selection",
      properties: [
        {
          propName: "Crop duration",
          propValue: "120 to 125 days"
        },
        {
          propName: "Leaf Colour",
          propValue: "Light Green"
        },
        {
          propName: "Steam",
          propValue: "Green Pollen"
        },
        {
          propName: "Colour",
          propValue: "Yellow"
        },
        {
          propName: "Head Shape",
          propValue: "Compact"
        },
        {
          propName: "Disease",
          propValue: "Tolerance to leaf Blight"
        },
        {
          propName: "Pest Controlled",
          propValue: "Tolerance to Brown Plant Hopper"
        },
        {
          propName: "Grain Type",
          propValue: "Fine"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Aditya",
      prodImg: "Arunodaya17.png",
      prodTitle: "Paddy Selection",
      properties: [
        {
          propName: "Crop duration",
          propValue: "115 to 120 days"
        },
        {
          propName: "Adobtability",
          propValue: "Wide"
        },
        {
          propName: "Plant tillering",
          propValue: "Strong plant with adabtaiblity"
        },
        {
          propName: "Grain",
          propValue: "Bold Quality with high Yield"
        },
        {
          propName: "Recommended season",
          propValue: "Kharif & Rabi Summer"
        }
      ]
    },
    {
      providerComp: "Arunodaya",
      prodId: "Aditya",
      prodImg: "Arunodaya18.png",
      prodTitle: "Paddy Selection",
      properties: [
        {
          propName: "Crop duration",
          propValue: "130 to 135 days"
        },
        {
          propName: "Adobtability",
          propValue: "Wide"
        },
        {
          propName: "Plant tillering",
          propValue: "Strong plant with adabtaiblity"
        },
        {
          propName: "Grain",
          propValue: "Fine Quality with high Yield"
        },
        {
          propName: "Recommended season",
          propValue: "Kharif & Rabi Summer"
        }
      ]
    }
  ];
}
