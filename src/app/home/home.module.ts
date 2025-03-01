import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperAdminModule } from '../super-admin/super-admin.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AccountComponent } from './account/account.component';
import { AdminPanelModule } from '../admin-panel/admin-panel.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperAdminModule,
    AdminPanelModule
  

  ],
  declarations: [HomePage
  , EmpListComponent,
  AccountComponent
  ]
})
export class HomePageModule {}
