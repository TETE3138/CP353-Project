import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {

    this.loginService.login(username, password).subscribe((response) => {
      console.log(response)
      if (response.success == "true") {
        this.loginService.setUserLoggedIn(username,response.isadmin);

        localStorage.setItem("username",username);
        localStorage.setItem("isadmin",response.isadmin);

        this.router.navigate(['/']);
        console.log("Logging in ...");
      } else {
        this.errorMessage = "Incorrect username or password !";
      }
    })
  }
  gotoSignup() {
    //  this.router.navigate(['signup']);
  }
}
