import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  private respone;

  constructor(private userManagementService:UserManagementService) {

  }

  ngOnInit() {

  }

  private username: string = "";
  private usernameError: string = "";
  private password: string = "";
  private passwordError: string = "";
  private confirmPassword: string = "";
  private confirmPasswordError: string = "";
  private result_text: string = "";

  addUser(username, password, isadmin) {

    if (this.username === "")
      this.usernameError = "Please enter username."
    else
      this.usernameError = ""
    if (this.password === "")
      this.passwordError = "Please enter password."
    else
      this.passwordError = ""
    if (this.confirmPassword === "")
      this.confirmPasswordError = "Please enter password again."
    else
      this.confirmPasswordError = ""


    if (this.usernameError === "" && this.passwordError === "" && this.confirmPasswordError === ""){
      console.log(this.username + this.password);
    }

    this.userManagementService.createNewUser(username, password, isadmin).subscribe((response) => {
      this.respone = response;
    });
  }
}