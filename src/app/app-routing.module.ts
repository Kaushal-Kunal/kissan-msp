import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'auth-panel',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path:'auth-panel',
    loadChildren: () => import('./auth-panel/auth-panel.module').then(m => m.AuthPanelModule)
  },
  {
    path:'admin-panel',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path:'employee-panel',
    loadChildren: () => import('./employee-panel/employee-panel.module').then(m => m.EmployeePanelModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
