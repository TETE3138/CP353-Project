import { Component, OnInit } from '@angular/core';
import { NotebookManagementService } from '../../services/notebook-management.service';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private notebookManagementService: NotebookManagementService) { }

  private notebookList: Notebook[];
  ngOnInit() {
    this.updateAllNotebook()
  }

  updateAllNotebook() {
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
      this.notebookList.forEach((element) => {
        this.notebookManagementService.getNotebookLikeCount(element).subscribe((response) => {
          element.likecount = response.likecount;
          this.notebookManagementService.getLikeUsers(element).subscribe((response) => {
            element.likeusers = response.usernames;
            if(element.likeusers.indexOf(this.loginService.getUsername()) > -1){
              element.like = true
            }else{
              element.like = false;
            }
          })
        })
      })
    })
  }

  like(notebook) {
    if (this.loginService.getUserLoggedIn() == false) {
      console.log("user is not logged in");
    } else {
      console.log(notebook._id)
      this.notebookManagementService.likeNotebook(notebook, this.loginService.getUsername()).subscribe((response) => {
        console.log(response)
        this.notebookManagementService.getLikeUsers(notebook).subscribe((response) => {
          notebook.likeusers = response.usernames;
          if (notebook.likeusers.indexOf(this.loginService.getUsername()) > -1) {
            notebook.like = true
          } else {
            notebook.like = false;
          }
          notebook.likecount = notebook.likeusers.length
        })
  
      })
    }

  }

}
interface Notebook {
  brand: string;
  nbname: string;
  price: number;
  cpu: string;
  gpu: string;
  os: string;
  display: number;
  ram: number;
  hdd: number;
  img_url: string;
  insert_by: string;
  insert_date: string;
  likecount: number;
  likeusers: string[];
  like:boolean;
}

