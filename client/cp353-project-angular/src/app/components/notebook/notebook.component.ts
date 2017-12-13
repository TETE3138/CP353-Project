import { Component, OnInit } from '@angular/core';
import { NotebookManagementService } from '../../services/notebook-management.service';
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  constructor(private notebookManagementService: NotebookManagementService) { }

  private notebookList: Notebook[];
  ngOnInit() {
    this.notebookManagementService.getNotebookList().subscribe((response) => {
      this.notebookList = response;
    })
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

