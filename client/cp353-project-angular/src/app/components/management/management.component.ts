import { Component, OnInit } from '@angular/core';
import { GetNotebookService } from '../../services/getnotebook.service';
import { NotebookManagementService } from '../../services/notebook-management.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private titleService: Title, private loginService: LoginService, private notebookManagementService: NotebookManagementService, private router: Router) { }
  private notebookList: Notebook[];

  private isActive: boolean;
  private isUpdateSuccess: boolean;

  private cpuError: string;
  private gpuError: string;
  private ramError: string;
  private hddError: string;
  private priceError: string;

  private toEditNotebook: Notebook

  private errorMsgNotebook: ErrorMsgNotebook = new ErrorMsgNotebook()

  ngOnInit() {
    this.titleService.setTitle('NotebookValue');
    this.toEditNotebook = new Notebook();
    this.updateList();

    this.CloseEditorForm();
    this.setUpdateFailed();
  }
  updateList() {
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
    })

  }
  getNotebookList() {
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
    })
  }

  deleteNotebook(notebook) {
    this.notebookManagementService.deleteNotebook(notebook).subscribe((response) => {
      if (response._id == notebook._id) {
        //delete ok
        this.updateList();
      }
    });
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
  setAddNotebook(notebook) {
    this.toEditNotebook = new Notebook();
    this.errorMsgNotebook = new ErrorMsgNotebook()
  }
  setEditNotebook(notebook) {
    this.toEditNotebook = notebook
    this.errorMsgNotebook = new ErrorMsgNotebook()
  }


  inputCheck(): Boolean {
    this.errorMsgNotebook = new ErrorMsgNotebook()
    this.errorMsgNotebook.brand = this.chkS(this.toEditNotebook.brand)
    this.errorMsgNotebook.nbname = this.chkS(this.toEditNotebook.nbname)
    this.errorMsgNotebook.price = this.chkN(this.toEditNotebook.price)
    this.errorMsgNotebook.cpu = this.chkS(this.toEditNotebook.cpu)
    this.errorMsgNotebook.gpu = this.chkS(this.toEditNotebook.gpu)
    this.errorMsgNotebook.os = this.chkS(this.toEditNotebook.os)
    this.errorMsgNotebook.display = this.chkN(this.toEditNotebook.display)
    this.errorMsgNotebook.ram = this.chkN(this.toEditNotebook.ram)
    this.errorMsgNotebook.hdd = this.chkN(this.toEditNotebook.hdd)
    this.errorMsgNotebook.img_url = this.chkS(this.toEditNotebook.img_url)
    return this.errorMsgNotebook.isError()
  }
  addNoteBook() {
    if (this.inputCheck()) {
    }
    else {
      this.notebookManagementService.createNotebook(this.toEditNotebook).subscribe((response) => {
        $('.ui.modal.add').modal('hide');
        console.log(response)
        this.updateList()

      });
    }
    this.updateList()
  }
  editNotebook(notebook) {
    if (this.inputCheck()) {
    }
    else {
      this.notebookManagementService.editNotebook(notebook).subscribe((response) => {
        if (response._id == notebook._id) {
          $('.ui.modal.edit').modal('hide');

        }
      });
    }
    this.updateList()
  }

  //Input check
  chkS(str) {
    if (str == null || str.length <= 0)
      return "This field can't be empty"

    return "";
  }
  chkN(str) {
    if (str == null || str.length <= 0)
      return "This field can't be empty and must be numberic only "
    if (+str == null)
      return "This field must be numberic only"
    return "";
  }

}

class ErrorMsgNotebook {
  brand: string = "";
  nbname: string = "";
  price: string = "";
  cpu: string = "";
  gpu: string = "";
  os: string = "";
  display: string = "";
  ram: string = "";
  hdd: string = "";
  img_url: string = "";

  isError(): Boolean {
    return (this.brand != "" || this.nbname != "" || this.price != "" || this.cpu != "" || this.gpu != "" || this.os != "" || this.display != "" || this.ram != "" || this.hdd != "" || this.img_url != "")
  }
}

class Notebook {
  brand: string;      //[0]
  nbname: string;     //[1]
  price: number;      //[2]
  cpu: string;        //[3]
  gpu: string;        //[4]
  os: string;         //[5]
  display: number;    //[6]
  ram: number;        //[7]
  hdd: number;        //[8]
  img_url: string;    //[9]
  insert_by: string;
  insert_date: string;
}

