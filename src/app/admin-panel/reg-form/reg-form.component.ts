import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
  standalone:false
})
export class RegFormComponent  implements OnInit {

  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit() {
    
  }
  
  loadDist(){
    this.crudservice.getDistrict().subscribe((res:any)=>{
      console.log(res);
      
    })
  }
}
