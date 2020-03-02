import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactusComponent, ConfirmComponent } from './contactus/contactus.component';
import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


import {DemoMaterialModule} from '../app/material-module';

import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';


import {ListingModule} from "listing-angular7";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommercialComponent } from './commercial/commercial.component';
import { DifferenceComponent } from './difference/difference.component';
import { MobilemarketingComponent } from './mobilemarketing/mobilemarketing.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { BigdataComponent } from './bigdata/bigdata.component';
import { PlatformfeaturesComponent } from './platformfeatures/platformfeatures.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsAndconditionsComponent } from './terms-andconditions/terms-andconditions.component';
import { AddPoliciesComponent } from './add-policies/add-policies.component';
import { BannerAddFormatComponent } from './banner-add-format/banner-add-format.component';
import { BigDataPartnerIntegrationComponent } from './big-data-partner-integration/big-data-partner-integration.component';
import { TechnologyAndServicesComponent } from './technology-and-services/technology-and-services.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CommercialComponent,
    DifferenceComponent,
    MobilemarketingComponent,
    OurteamComponent,
    BigdataComponent,
    PlatformfeaturesComponent,
    GetstartedComponent,
    PrivacyComponent,
    TermsAndconditionsComponent,
    AddPoliciesComponent,
    BannerAddFormatComponent,
    ConfirmComponent,
    BigDataPartnerIntegrationComponent,
    TechnologyAndServicesComponent

  ],
  imports: [
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ ConfirmComponent ]
})
export class AppModule { }
