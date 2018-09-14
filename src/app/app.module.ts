import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import{HttpModule} from '@angular/http';
import { ProductListService } from '@app/static/services/productList.service';
import { productFilterPipe } from './Pipes/product-filter.pipe';
import {FormsModule} from '@angular/forms' 




@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  declarations: [AppComponent, productFilterPipe],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
