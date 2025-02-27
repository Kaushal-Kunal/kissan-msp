import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { NewPwdComponent } from './new-pwd/new-pwd.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'forgot-pwd',component:ForgotPwdComponent
  },
  {
    path:'verify-otp',component:VerifyOtpComponent
  },
  {
    path:'new-pwd',component:NewPwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPanelRoutingModule { }
