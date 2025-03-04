import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminPanelComponent } from './super-admin-panel/super-admin-panel.component';
import { ReportComponent } from './report/report.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';

const routes: Routes = [
  {
    path:'',component:SuperAdminPanelComponent,
    children:[
    
      {
        path:'report',component:ReportComponent
      },
      {
        path:'emp-list',component:EmpListComponent
      },
      {
        path:'super-admin-home',component:SuperAdminHomeComponent
      }
    
    ],
  },
  {
    path:'profile',component:ProfileComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }