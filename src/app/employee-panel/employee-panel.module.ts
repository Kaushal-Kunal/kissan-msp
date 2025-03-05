import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePanelRoutingModule } from './employee-panel-routing.module';
import { IonicModule } from '@ionic/angular';
import { MemberListComponent } from './member-list/member-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { MemberRegComponent } from './member-reg/member-reg.component';
import { EmpReportComponent } from './emp-report/emp-report.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [
    MemberListComponent,
    EmployeeComponent,
    EmpProfileComponent,
    MemberRegComponent,
    EmpReportComponent,
    UpdatePwdComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeePanelRoutingModule,
    IonicModule,
  ]
})
export class EmployeePanelModule { }
