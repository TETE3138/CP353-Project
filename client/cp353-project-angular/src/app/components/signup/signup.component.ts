import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  //private userList:User[];
  private respone;

  constructor(private userManagementService:UserManagementService) {

  }

  ngOnInit() {

    // status isadmin
    this.status = "admin";

    //this.getAllUser();
    
  }

  /*getAllUser(){
    this.userManagementService.getAllUser().subscribe((response) => {
    //this.userList = response;
    })
  }*/

  private username: string = "";
  private usernameError: string = "";
  private password: string = "";
  private passwordError: string = "";
  private confirmPassword: string = "";
  private confirmPasswordError: string = "";

  private status: string;

  addUser() {
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

    this.userManagementService.createNewUser(this.username, this.password, this.status).subscribe((response) => {
      this.respone = response;
      //this.getAllUser();
    });  
  }
}
