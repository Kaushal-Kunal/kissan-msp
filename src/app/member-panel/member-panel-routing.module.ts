import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MembersComponent } from './members/members.component';
import { MemberReportComponent } from './member-report/member-report.component';
import { MemberRegComponent } from './member-reg/member-reg.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path:'', component: MemberDashboardComponent,
    children:[
      {
        path:'member',component:MembersComponent
      },
      {
        path:'member-report', component:MemberReportComponent
      }
    ]
  },
  {
    path:'member-profile',component:MemberProfileComponent
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
export class MemberPanelRoutingModule { }
