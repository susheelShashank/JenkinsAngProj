import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { NguCarouselModule  } from '@ngu/carousel';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TeneDropdownComponent } from './tene-dropdown/tene-dropdown.component';
import { OrbiPartnersComponent } from './orbi-partners/orbi-partners.component';
import { OrbiPortfolioComponent } from './orbi-portfolio/orbi-portfolio.component';
import { OrbiContactComponent } from './orbi-contact/orbi-contact.component';
import { OrbiTeamComponent } from './orbi-team/orbi-team.component';
import { OrbiCarouselComponent } from './orbi-carousel/orbi-carousel.component';
import { AboutOrbiComponent } from './about-orbi/about-orbi.component';
import { OrbiPersonComponent } from './orbi-person/orbi-person.component';
import { OrbiPartnerDetailsComponent } from './orbi-partners-details/orbi-partners-details.component';
import { OrbiHomeComponent } from './orbi-home/orbi-home.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, NguCarouselModule],
  declarations: [AboutComponent, FeaturesComponent, TeneDropdownComponent, OrbiPartnersComponent,
    OrbiPortfolioComponent, OrbiContactComponent, OrbiTeamComponent, OrbiCarouselComponent, AboutOrbiComponent, OrbiPersonComponent, OrbiPartnerDetailsComponent, OrbiHomeComponent]
})
export class StaticModule {}
