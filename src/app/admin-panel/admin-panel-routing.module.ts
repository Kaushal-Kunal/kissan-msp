import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminReportComponent } from './admin-report/admin-report.component';

const routes: Routes = [
  {
    path: '',component:AdminComponent,
    children:[
      {
        path: 'emp-list', component: EmpListComponent
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
    path:'admin-profile',component: AdminProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
