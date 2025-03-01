import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
       {
          path:'super-admin',
          loadChildren: () => import('../super-admin/super-admin.module').then(m => m.SuperAdminModule)
        },
        {
          path:'admin-panel',
          loadChildren: () => import('../admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
        },
        {
          path:'employee-panel',
          loadChildren: () => import('../employee-panel/employee-panel.module').then(m => m.EmployeePanelModule)
        },
       
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
