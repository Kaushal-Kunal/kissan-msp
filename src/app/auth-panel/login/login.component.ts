import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  logindata: any;
  constructor(
    private crudservice: CrudService,
    private _router: Router
  ) { }

  ngOnInit() { }
  onSubmit() {
    this.crudservice.OnLogin(this.username, this.password).subscribe((res:any)=>{
      this.logindata= res.data
      if (res.status == true){
        alert("hii")
        if (this.logindata.Role == "admin") {
          alert("Login Successfull")
          this._router.navigate(['/admin-panel'])
        }
        else if(this.logindata.Role == "superadmin"){
          alert("Login Successfull")
          this._router.navigate(['/super-admin'])
        }
      }
    })
  }
}
