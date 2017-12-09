import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private result_text: string;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  login(username, password) {

    this.loginService.login(username, password).subscribe((response) => {
      if (response.success == "true") {
        this.loginService.setUserLoggedIn();
        this.router.navigate(['home']);
        console.log("Logging in ...");
      } else {
        this.result_text = "incorrect username or password!";
      }
    })
    return false;
  }

}
