import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TeneDropdownComponent } from './tene-dropdown/tene-dropdown.component';
import { OrbiPartnersComponent } from '@app/static/orbi-partners/orbi-partners.component';
import { OrbiContactComponent } from '@app/static/orbi-contact/orbi-contact.component';
import {OrbiTeamComponent} from '@app/static/orbi-team/orbi-team.component'
import { OrbiPersonComponent } from '@app/static/orbi-person/orbi-person.component';
import { OrbiPartnerDetailsComponent } from '@app/static/orbi-partners-details/orbi-partners-details.component';
import { OrbiHomeComponent } from '@app/static/orbi-home/orbi-home.component';
import {OrbiBhalsarComponent } from '@app/static/orbi-bhalsar/orbi-bhalsar.component';
import { OrbiCamsonComponent} from '@app/static/orbi-camson/orbi-camson.component';
import {ProductDetailComponent } from '@app/static/product-detail/product-detail.component'
const routes: Routes = [
  {
    path: 'Home',
    component: OrbiHomeComponent,
    data: { title: 'orbi.home.screenTitle' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'orbi.menu.about' }
  },
  {
    path: 'Products',
    component: TeneDropdownComponent,
    data: { title: 'orbi.menu.teneDropdown' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'orbi.menu.features' }
  },
  { path: 'person/:pId', 
  component: OrbiPersonComponent, 
    data: { title: 'orbi.menu.about' }
},
  /*{
    path:'orbi-partners',
    component: OrbiPartnersComponent,
    data:{title:'orbi.partners.partners'}

  },*/
  {
    path:'contact',
    component: OrbiContactComponent,
    data:{title:'orbi.contact.screenTitle'}
  },{
    path:'PartnersList/:partnerId',
    component: OrbiPartnerDetailsComponent,
    data:{title:'orbi.menu.teneDropdown'}
  },
  
  /*{
    path: 'details/:pId', component: ProductDetailComponent, 
   
  }*/

  {
    path:'Products',
    redirectTo:'http://localhost:4200/Arunodaya.json'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
