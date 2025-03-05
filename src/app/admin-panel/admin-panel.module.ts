import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AdminComponent } from './admin/admin.component';
import { IonicModule } from '@ionic/angular';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberRegComponent } from './member-reg/member-reg.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    EmpListComponent,
    RegFormComponent,
    AdminProfileComponent,
    AdminReportComponent,
    UpdatePwdComponent,
    ViewProfileComponent,
    MemberListComponent,
    MemberRegComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    IonicModule
  ]
})
export class AdminPanelModule { }
