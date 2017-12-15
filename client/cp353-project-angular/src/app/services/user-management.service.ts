import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class UserManagementService {



  constructor(private http: Http) { }


  getAllUser() {
    return this.http.get("http://localhost:3000/user/getuser").map((res) => res.json());
  }
  
  createNewUser(username, password, isadmin) {

    let body = {
      "username": username,
      "password": password,
      "isadmin": isadmin
    }
    return this.http.post("http://localhost:3000/user/signup", body)
      .map((res) => res.json());
  }

}
