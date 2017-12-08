import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class UserManagementService {

  constructor(private http:Http) { }

  getAllUser(){
    return this.http.get("http://localhost:4200/user/getuser").map((res) => res.json());
    }
    createNewUser(username,password,status){
      
        let body =  {
          "username":username,
          "password":password,
          "isadmin":status
        }     
        return this.http.post("http://localhost:4200/user/signup",body)
                            .map((res) => res.json());
        }
      
}
