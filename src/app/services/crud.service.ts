import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl:string="https://thefizzcompanyindia.com/api/"
  constructor(
    private http: HttpClient
  ) { }
  OnLogin(username:any, password:any){
    return this.http.get(`${this.baseUrl}login?username=${username}&password=${password}`,{})
  }
  getDistrict(){
    return this.http.get(`${this.baseUrl}selectDistrict`,{})
  }
}
