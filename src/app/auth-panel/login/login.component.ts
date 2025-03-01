import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:false
})
export class LoginComponent  implements OnInit {
  username:string=''
  password:string=''
  constructor(
    private crudservice: CrudService,
    private _router:Router
  ) { }

  ngOnInit() {}
  onSubmit(){
    console.log("user name ", this.username);
    console.log("pass name ", this.password);

    if(this.username == "superadmin"){
      this._router.navigate(['/home/super-admin'])
    } 
    else if(this.username == 'admin'){
      this._router.navigate(['/home/admin-panel'])
    }
    else if(this.username=="employee"){
      this._router.navigate(['/home/employee-panel'])
    }
    
   }
}
