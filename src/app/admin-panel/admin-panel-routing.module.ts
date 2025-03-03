import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Routes = [
  {
    path:'',component:AdminComponent,
  },
  {
    path:'reg-form',component:RegFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
