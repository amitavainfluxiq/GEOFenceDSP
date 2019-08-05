import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { ContactusComponent } from './contactus/contactus.component';
import {HomeComponent} from '../app/home/home.component'
import { CommercialComponent } from './commercial/commercial.component';
import { DifferenceComponent } from './difference/difference.component';
import { MobilemarketingComponent } from './mobilemarketing/mobilemarketing.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { BigdataComponent } from './bigdata/bigdata.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { PlatformfeaturesComponent } from './platformfeatures/platformfeatures.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsAndconditionsComponent } from './terms-andconditions/terms-andconditions.component';
import { BannerAddFormatComponent } from './banner-add-format/banner-add-format.component';
import { AddPoliciesComponent } from './add-policies/add-policies.component';




const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'commercialGEO', component: CommercialComponent},
    {path:'contactus', component: ContactusComponent},
    {path:'The-Difference', component: DifferenceComponent},
    {path:'mobilemarketing', component: MobilemarketingComponent},
    {path: 'ourteam', component: OurteamComponent},
    { path:'bigdata', component: BigdataComponent},
    { path: 'getstarted', component: GetstartedComponent},
    { path: 'platform-features', component: PlatformfeaturesComponent},
    { path: 'privacy@', component: PrivacyComponent},
    { path: 'terms@', component: TermsAndconditionsComponent},
    { path: 'banner-add-format', component: BannerAddFormatComponent},
    {path: 'add-policies', component: AddPoliciesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
