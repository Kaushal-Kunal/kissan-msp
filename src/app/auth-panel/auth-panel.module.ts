import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPanelRoutingModule } from './auth-panel-routing.module';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { NewPwdComponent } from './new-pwd/new-pwd.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPwdComponent,
    VerifyOtpComponent,
    NewPwdComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AuthPanelRoutingModule,
    FormsModule
  ]
})
export class AuthPanelModule { }
