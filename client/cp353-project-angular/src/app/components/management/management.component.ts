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
  private isUpdateSuccess: boolean;

  private cpuError: string;
  private gpuError: string;
  private ramError: string;
  private hddError: string;
  private priceError: string;


  ngOnInit() {
  
      this.notebookManagementService.getNotebookList().subscribe((response) => {
        this.notebookList = response;
      })
      
      this.CloseEditorForm();
      this.setUpdateFailed();
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

  setUpdateSuccess() {
    this.isUpdateSuccess = true;
  }

  setUpdateFailed() {
    this.isUpdateSuccess = false;
  }

  editNotebook(cpu, gpu, ram, hdd, price) {

    /*if(cpu === "") {
      this.cpuError = "Please Enter cpu.";
    }else if(cpu === ) {
      this.cpuError = "";
    } else {
      this.cpuError = "";
    }
    if(gpu === "") {
      this.gpuError = "Please Enter cpu.";
    }else if(gpu === ) {
      this.gpuError = "";
    } else {
      this.gpuError = "";
    }
    if(ram === "") {
      this.ramError = "Please Enter cpu.";
    }else if(ram === ) {
      this.ramError = "";
    } else {
      this.ramError = "";
    }
    if(hdd === "") {
      this.hddError = "Please Enter cpu.";
    }else if(hdd === ) {
      this.hddError = "";
    } else {
      this.hddError = "";
    }
    if(price === "") {
      this.priceError = "Please Enter cpu.";
    }else if(hdd === ) {
      this.priceError = "";
    } else {
      this.priceError = "";
    }*/
    


    this.notebookManagementService.updateNotebook(cpu, gpu, ram, hdd, price).subscribe((response) => {
         this.setUpdateSuccess();
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

