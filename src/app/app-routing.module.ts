import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { ContactusComponent } from './contactus/contactus.component';
import {HomeComponent} from '../app/home/home.component'
import { CommercialComponent } from './commercial/commercial.component';
import { DifferenceComponent } from './difference/difference.component';
import { MobilemarketingComponent } from './mobilemarketing/mobilemarketing.component';




const appRoutes: Routes = [

    {path:'', component: HomeComponent},
    {path:'commercialGEO', component: CommercialComponent},
    {path:'contactus', component: ContactusComponent},
    {path:'the_difference', component: DifferenceComponent},
    {path:'mobilemarketing', component: MobilemarketingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
