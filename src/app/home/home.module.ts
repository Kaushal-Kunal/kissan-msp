import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperAdminModule } from '../super-admin/super-admin.module';
import { EmpListComponent } from '../super-admin/emp-list/emp-list.component';
import { AdminPanelModule } from '../admin-panel/admin-panel.module';
import { ReportComponent } from '../super-admin/report/report.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperAdminModule,
    AdminPanelModule
  

  ],
  declarations: [
    HomePage, 
    EmpListComponent,
    ReportComponent
  ]
})
export class HomePageModule {}
