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




const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'commercialGEO', component: CommercialComponent},
    {path:'contactus', component: ContactusComponent},
    {path:'thedifference', component: DifferenceComponent},
    {path:'mobilemarketing', component: MobilemarketingComponent},
    {path: 'ourteam', component: OurteamComponent},
    { path:'bigdata', component: BigdataComponent},
    { path: 'getstarted', component: GetstartedComponent},
    { path: 'platform-features', component: PlatformfeaturesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
