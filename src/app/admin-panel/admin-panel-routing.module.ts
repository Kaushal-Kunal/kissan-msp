import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MemberDashboardComponent } from '../member-panel/member-dashboard/member-dashboard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberRegComponent } from './member-reg/member-reg.component';

const routes: Routes = [
  {
    path: '',component:AdminComponent,
    children:[
      {
        path: 'emp-list', component: EmpListComponent
      },
      {
        path: 'member-list', component: MemberListComponent
      },
      {
        path:'admin-report', component:AdminReportComponent
      }
    ],
  },
  {
    path:'reg-form',component:RegFormComponent
  },
  {
    path:'member-reg',component:MemberRegComponent
  },
  {
    path:'admin-profile',component: AdminProfileComponent
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
export class AdminPanelRoutingModule { }
