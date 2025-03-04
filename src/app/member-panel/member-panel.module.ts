import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberPanelRoutingModule } from './member-panel-routing.module';
import { IonicModule } from '@ionic/angular';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { MembersComponent } from './members/members.component';
import { MemberReportComponent } from './member-report/member-report.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberRegComponent } from './member-reg/member-reg.component';


@NgModule({
  declarations: [
    MemberDashboardComponent,
    MembersComponent,
    MemberReportComponent,
    MemberProfileComponent,
    MemberRegComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MemberPanelRoutingModule
  ]
})
export class MemberPanelModule { }
