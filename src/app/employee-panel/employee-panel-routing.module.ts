import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { MemberRegComponent } from './member-reg/member-reg.component';
import { EmpReportComponent } from './emp-report/emp-report.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path:'',component:EmployeeComponent,
    children:[
      {
        path:'member-list',component:MemberListComponent,
      },
      {
        path:'emp-report',component:EmpReportComponent
      }
    ],
  },
  {
    path:'emp-profile',component:EmpProfileComponent
  },
  {
    path:'member-reg',component:MemberRegComponent
  },
  {
    path:'update-pwd',component:UpdatePwdComponent
  },
  {
    path:'view-profile',component:ViewProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeePanelRoutingModule { }
