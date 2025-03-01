import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SuperAdminPanelComponent } from './services/super-admin-panel/super-admin-panel.component';
import { AdminComponent } from './admin-panel/admin/admin.component';
import { EmployeeComponent } from './employee-panel/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperAdminPanelComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
