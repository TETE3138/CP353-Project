import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class UserManagementService {

  private isCreateSuccess: boolean; //

  constructor(private http:Http) { this.isCreateSuccess = false; } //
  //
  setCreateSuccess() {
    this.isCreateSuccess = true;
  }
  //
  setCreateFailed() {
    this.isCreateSuccess = false;
  }

  getAllUser(){
    return this.http.get("http://localhost:3000/user/getuser").map((res) => res.json());
    }
    createNewUser(username,password,isadmin){
      
        let body =  {
          "username":username,
          "password":password
        }     
        return this.http.post("http://localhost:3000/user/signup", body)
                            .map((res) => res.json());
        }
      
}
