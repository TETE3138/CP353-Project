import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  //private respone;

  constructor(private userManagementService: UserManagementService, private router: Router) {

  }

  ngOnInit() {
    this.setCreateFailed()
  }


  private usernameError: string = "";
  private passwordError: string = "";
  private confirmPasswordError: string = "";


  private isCreateSuccess: boolean;
  private isUsernameDuplicated: boolean = false;
  setCreateSuccess() {
    this.isCreateSuccess = true;
  }

  setCreateFailed() {
    this.isCreateSuccess = false;
  }
  gotoSignin() {
    console.log("Works");
    this.router.navigate(['/signin']);
  }


  addUser(username, password, confirmPassword) {

    console.log(username + " " + password + " " + confirmPassword)
    if (username === "")
      this.usernameError = "Please enter username."
    else
      this.usernameError = ""
    if (password === "")
      this.passwordError = "Please enter password."
    else
      this.passwordError = ""
    if (confirmPassword === "")
      this.confirmPasswordError = "Please enter password again."
    else
      this.confirmPasswordError = ""
    if (confirmPassword != password) {
      this.confirmPasswordError = "Password confirmation does not match!"
    }

    if (this.usernameError == "" && this.passwordError == "" && this.confirmPasswordError == "") {
      let isadmin = 0;
      if (username == "admin") {
        isadmin = 1;
      }
      this.userManagementService.createNewUser(username, password, isadmin).subscribe((response) => {

        console.log(response);
        this.setCreateSuccess();
        console.log("Success, Account created.");
        this.isUsernameDuplicated = false;
        //Any error will be considered as username duplication

      }
        , (error) => {
          this.isUsernameDuplicated = true;
          this.usernameError = "This username is already taken!";
        })
    } else {
      console.log("sign uperror");
    }
  }


}
