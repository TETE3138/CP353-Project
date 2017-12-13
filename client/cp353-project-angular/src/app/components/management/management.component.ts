import { Component, OnInit } from '@angular/core';
import { GetNotebookService } from '../../services/getnotebook.service';
import { NotebookManagementService } from '../../services/notebook-management.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private loginService: LoginService,private notebookManagementService: NotebookManagementService, private router: Router) { }
  private notebookList: Notebook[];

  private isActive: boolean;
  private isUpdate: boolean;

  ngOnInit() {
  
      this.notebookManagementService.getNotebookList().subscribe((response) => {
        this.notebookList = response;
      })
      
      this.CloseEditorForm();
  }

  getNotebookList(){
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
    })
  }

  deleteNotebook(notebook){
    this.notebookList.forEach((element,index) => {
      if(element == notebook){
        this.notebookManagementService.deleteNotebook(notebook.id).subscribe((response) => {
          console.log("delete respone : "+response);
        });
        this.notebookList.splice(index,1);
      }
    });
    return false;
  }

  // active ui modal (ui active modal)
  OpenEditorForm() {
    this.isActive = true;
  }

  // not active ui modal (ui modal)
  CloseEditorForm() {
    this.isActive = false;
  }

  setCreateSuccess() {
    this.isUpdate = true;
  }

  setCreateFailed() {
    this.isUpdate = false;
  }

  editNotebook(id, price, cpu, gpu, ram, hdd) {
    this.notebookManagementService.editNotebook(id, price, cpu, gpu, ram, hdd)
      .subscribe((response) => {
         this.getNotebookList();
      });
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
}

