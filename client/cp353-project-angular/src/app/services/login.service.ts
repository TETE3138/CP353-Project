import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  private isUserLoggedIn: boolean;

  private username = "";
  private isadmin = 0;
  constructor(private http: Http) {

  }

  ngOnInit() {

  }
  getUsername(){
    return this.username;
  }
  setUserLoggedIn(username, isadmin) {
    this.isUserLoggedIn = true;
    this.username = username;
    this.isadmin = isadmin;
  }

  setUserLoggedOut() {
    localStorage.clear();
    this.isUserLoggedIn = false;
  }

  getIsAdmin(){
    return this.isadmin;
  }

  getUserLoggedIn() {
    let username = localStorage.getItem('username');
    if (username === null) {
      this.setUserLoggedOut();
    } else {

      let isadmin = localStorage.getItem('isadmin');
      if (isadmin == "1")
        this.setUserLoggedIn(username, 1)
      else
        this.setUserLoggedIn(username, 0)

    }
    return this.isUserLoggedIn;
  }

  login(username, password) {

    let body = {
      "username": username,
      "password": password
    }

    return this.http.post("http://localhost:3000/user/login", body)
      .map((res) => res.json());
  }
}

