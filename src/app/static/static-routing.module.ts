import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TeneDropdownComponent } from './tene-dropdown/tene-dropdown.component';
import { OrbiPartnersComponent } from '@app/static/orbi-partners/orbi-partners.component';
import { OrbiContactComponent } from '@app/static/orbi-contact/orbi-contact.component';
import {OrbiTeamComponent} from '@app/static/orbi-team/orbi-team.component'

const routes: Routes = [
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
  /*{
    path:'orbi-partners',
    component: OrbiPartnersComponent,
    data:{title:'orbi.partners.partners'}

  },*/
  {
    path:'contact',
    component: OrbiContactComponent,
    data:{title:'orbi.contact.screenTitle'}
  },
 /* {
    path:'orbi-Team',
    component: OrbiTeamComponent,
    data:{title:'orbi.team.screenTitle'}
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
