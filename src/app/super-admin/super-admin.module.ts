import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';
import { IonicModule } from '@ionic/angular';
import { SuperAdminPanelComponent } from './super-admin-panel/super-admin-panel.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    SuperAdminHomeComponent,
    SuperAdminPanelComponent,
    EmpListComponent,
    ProfileComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
