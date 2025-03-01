import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminPanelComponent } from '../services/super-admin-panel/super-admin-panel.component';

const routes: Routes = [
  {
    path:'',component:SuperAdminPanelComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
